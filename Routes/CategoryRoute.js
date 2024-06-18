const express = require("express");
const categoryRoute = express.Router();
const {
  GetCategory,
  PostCategory,
} = require("../controllers/Category.controller");

categoryRoute.get("/", GetCategory);
categoryRoute.post("/", PostCategory);
module.exports = {
  categoryRoute,
};
