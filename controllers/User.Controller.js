const jwt = require("jsonwebtoken");
const Email_Verification = require("../services/EmailVerification");
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");
const { UserModel } = require("../Models/Login");
let otp;
let userIdcache;

//USER REGISTER CONTROLLER
const Register = async (req, res) => {
  const { Name, PhoneNumber, email, Password } = req.body;

  const checkemail = await UserModel.find({ email });
  if (!isEmail(email)) {
    res.status(400).send("Invalid email address");
  } else if (checkemail.length > 0) {
    res.status(400).send("User Already exist");
  } else {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(Password, salt, async function (err, hash) {
        if (err) {
          res.status(400).send(err);
        } else {
          try {
            const User = new UserModel({
              Name,
              email,
              PhoneNumber,
              Password: hash,
            });
            await User.save();
            res.status(201).send("User created");
          } catch (err) {
            res.status(400).send(err);
          }
        }
      });
    });
  }
};

//USER LOGIN CONTROLLER
const LoginUser = async (req, res) => {
  const { email, Password } = req.body;
  if (req.query.otp) {
    if (otp === +req.query.otp) {
      const token = jwt.sign({ UserId: userIdcache }, "loginornot");

      res.status(200).send({ message: token });
    } else {
      res.status(200).send({ message: "wrong otp" });
    }
  } else {
    try {
      const checkuser = await UserModel.find({ email });

      if (checkuser.length > 0) {
        userIdcache = checkuser[0]._id;
        bcrypt.compare(Password, checkuser[0].Password, function (err, result) {
          if (err) {
            res.send(err);
          } else if (!result) {
            res.status(401).send({ message: "Incorrect Password" });
          } else {
            otp = Math.floor(1000 + Math.random() * 9000);
            const { transporter, info } = Email_Verification(email, otp);
            transporter.sendMail(info, (err, result) => {
              if (err) {
                console.log(`error in sending mail ${err}`);
              } else {
                res.status(200).send({ message: "OTP sent" });
              }
            });
          }
        });
      } else {
        userIdcache;
        res.status(401).send({ message: "Incorrect email" });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const DeleteUser = async (req, res) => {
  const ID = req.params.id;
  try {
    const deletedata = await UserModel.findByIdAndDelete({ _id: ID });
    res.send("User deleted");
  } catch (err) {
    res.send(`error:${err}`);
  }
};

const GetUserDetails = async (req, res) => {
  const finduser = req.body.userId;
  try {
    const getuser = await UserModel.find({ _id: finduser });
    res.send(getuser);
  } catch (err) {
    res.send(err);
  }
};
module.exports = { Register, LoginUser, DeleteUser, GetUserDetails };
