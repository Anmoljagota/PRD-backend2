const express = require("express");
const { UserModel } = require("../Models/Login");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
/* For Regisration */
userRouter.post("/register", async (req, res) => {
  const { email } = req.body;
  const checkuser = await UserModel.find({ email });
  if (checkuser.length === 0) {
    try {
      const create = new UserModel({ email });
      await create.save();
      res.send("User Created");
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else {
    res.send("User Already Created");
  }
});

/* For Login */
userRouter.post("/login", async (req, res) => {
  const { email } = req.body;
  console.log(req.body, "i am a body");
  const checkuser = await UserModel.find({ email });
  if (checkuser.length > 0) {
    console.log(checkuser[0]._id)
    try {
      var token = jwt.sign({ UserId: checkuser[0]._id }, "loginornot");
      console.log("token",token)
      console.log("i am token",token)
      res.send(token);
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else {
    res.send("Wrong Credentials");
  }
});
//DELETE USER
userRouter.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    const deletedata = await UserModel.findByIdAndDelete({ _id: ID });
    res.send("User deleted");
  } catch (err) {
    res.send(`error:${err}`);
  }
});
module.exports={
  userRouter
}