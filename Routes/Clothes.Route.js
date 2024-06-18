const express = require("express");
const clothesProductRoute = express.Router();
const {
  GetProducts,
  AddProducts,
  DeleteProduct,
} = require("../controllers/Clothes.Controller");
clothesProductRoute.get("/clothes", GetProducts);
clothesProductRoute.post("/clothes", AddProducts);
clothesProductRoute.delete("/:id", DeleteProduct);
module.exports = {
  clothesProductRoute,
};
