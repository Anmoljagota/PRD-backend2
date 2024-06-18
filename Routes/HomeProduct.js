const express = require("express");
const homeProductRoute = express.Router();
const {
  GetHomeProduct,
  AddHomeProducts,
} = require("../controllers/HomeProducts.Controller");
homeProductRoute.get("/", GetHomeProduct);
homeProductRoute.post("/", AddHomeProducts);
module.exports = {
  homeProductRoute,
};
