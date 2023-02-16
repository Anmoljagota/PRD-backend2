const express = require("express");
const clothesProductRoute = express.Router();
const { clothesmodel } = require("../Models/Clothes.model");
clothesProductRoute.get("/clothes", async (req, res) => {
  if (req.query.category) {
    console.log("category running");
    try {
      let categorydata = await clothesmodel.find({
        category: req.query.category,
      });
      res.send(categorydata);
    } catch (err) {
      res.send(err);
    }
  } else if (req.query.page && req.query.limit) {
    console.log("simple roduct page running");
    try {
      const { page, limit } = req.query;
      if (!page) {
        page = 1;
      }
      let newlimit = Number(limit);
      let size = (page - 1) * limit;
      let paginateddata = await clothesmodel
        .find({})
        .limit(newlimit)
        .skip(size);
      res.send(paginateddata);
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else if (req.query._sort) {
    console.log("sorting running");
    try {
      const sortBy = req.query._sort;
      // const order = req.query._order;
      if (sortBy === "disc") {
        data = 1;
      } else {
        sortBy === "LTH" ? (data = 1) : (data = -1);
      }
      // console.log("i am data", data);
      sortBy === "disc"
        ? (sortdata = await clothesmodel.find({}).sort({ discount: data }))
        : (sortdata = await clothesmodel.find({}).sort({ price: data }));
      res.send(sortdata);
    } catch (err) {
      res.send(err);
    }
  } else if (req.query.search) {
    console.log("i ma searchhh running", req.query.search);
    try {
      let searchdata = await clothesmodel.find({
        description: { $regex: `${req.query.search}`, $options: "i" },
      });
      res.send(searchdata);
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else {
    console.log("product data running");
    try {
      let productdata = await clothesmodel.find({ _id: req.body });
      res.send(productdata);
    } catch (err) {
      res.send(err);
    }
  }
});

clothesProductRoute.post("/clothes", async (req, res) => {
  if (req.body.product) {
    try {
      let productdata = await clothesmodel.find({ _id: req.body.product });
      res.send(productdata);
    } catch (err) {
      res.send(err);
    }
  } else {
    try {
      const PostData = new clothesmodel(req.body);
      await PostData.save();
      res.send("data added");
    } catch (err) {
      res.send(`err`);
    }
  }
});
module.exports = {
  clothesProductRoute,
};
