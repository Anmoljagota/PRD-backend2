const { userdetailsModel } = require("../Models/Userdetails.Model");
const { middleware } = require("../Middlewares/Middlewares");
const express = require("express");
const detailsroute = express.Router();
detailsroute.post("/", middleware, async (req, res) => {
  console.log("iii mammmmm reaaaaaaa", req.body);
  try {
    const userdetails = new userdetailsModel(req.body);
    await userdetails.save();
    res.send(userdetails);
  } catch (err) {
    res.send(err);
  }
});
detailsroute.get("/", middleware, async (req, res) => {
  console.log("iii mammmmm reaaaaaaa", req.body);
  const { userId } = req.body;
  try {
    const userdetails = await userdetailsModel.find({ userId: userId }).populate("userId");
res.send(userdetails);
  } catch (err) {
    res.send(err);
  }
});
module.exports = {
  detailsroute,
};
