const { middleware } = require("../Middlewares/Middlewares");
const { AddAdmin } = require("../controllers/Admin.Controller");
const express = require("express");
const AdminProduct = express.Router();
AdminProduct.post("/", middleware, AddAdmin);
module.exports = {
  AdminProduct,
};
