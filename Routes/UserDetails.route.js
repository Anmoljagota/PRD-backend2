const { AddDetails, GetDetails } = require("../controllers/Details.Controller");
const { middleware } = require("../Middlewares/Middlewares");
const express = require("express");
const detailsroute = express.Router();
detailsroute.post("/", middleware, AddDetails);
detailsroute.get("/", middleware, GetDetails);
module.exports = {
  detailsroute,
};
