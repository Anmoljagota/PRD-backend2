const express = require("express");
const homeProductRoute = express.Router();
const { Homemodel } = require("../Models/HomePageProduct");
homeProductRoute.get("/", async (req, res) => {
  try {
    const { page, limit } = req.query;
    if (!page) {
      page = 1;
    }
    let newlimit = Number(limit);
    let size = (page - 1) * limit;
    let paginateddata = await Homemodel.find({}).limit(newlimit).skip(size);
    res.send(paginateddata);
  } catch (err) {
    res.send(`error:${err}`);
  }
});
homeProductRoute.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const PostData = new Homemodel(req.body);
    await PostData.save();
    res.send("data added");
  } catch (err) {
    res.send(`err`);
  }
});
module.exports = {
  homeProductRoute,
};
