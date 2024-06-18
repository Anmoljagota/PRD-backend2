const express = require("express");
const { middleware } = require("../Middlewares/Middlewares");
const {
  AddItemToCart,
  DeleteCartItem,
  GetAllCartItem,
} = require("../controllers/Cart.Controller");
const cartRoute = express.Router();
cartRoute.post("/", middleware, AddItemToCart);
cartRoute.get("/", middleware, GetAllCartItem);
cartRoute.delete("/:id", DeleteCartItem);
module.exports = {
  cartRoute,
};
