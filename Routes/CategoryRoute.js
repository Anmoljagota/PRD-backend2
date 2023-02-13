const express = require("express");
const categoryRoute = express.Router();
const { CategoryModel } = require("../Models/CategoryModel");
categoryRoute.get("/", async (req, res) => {
  try {
    const CategoryData = await CategoryModel.find({});
    res.send(CategoryData);
  } catch (err) {
    res.send(`error:${err}`);
  }
});
categoryRoute.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const PostData = new CategoryModel(req.body);
    await PostData.save();
    res.send("data added");
  } catch (err) {
    res.send(`err`);
  }
});
module.exports = {
  categoryRoute,
};
