const { userdetailsModel } = require("../Models/Userdetails.Model");
const AddDetails = async (req, res) => {
  try {
    const userdetails = new userdetailsModel(req.body);
    await userdetails.save();
    res.send(userdetails);
  } catch (err) {
    res.send(err);
  }
};


const GetDetails=async (req, res) => {
   
    const { userId } = req.body;
    try {
      const userdetails = await userdetailsModel
        .find({ userId: userId })
        .populate("userId");
      res.send(userdetails);
    } catch (err) {
      res.send(err);
    }
  };
module.exports = { AddDetails ,GetDetails};
