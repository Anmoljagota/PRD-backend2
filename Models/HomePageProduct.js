const mongoose = require("mongoose");
const homeSchema = mongoose.Schema({
  image: String,
  discount: String,
  title: String,
  value: Number,
  price: Number,
});
const Homemodel = mongoose.model("HomeProducts", homeSchema);
module.exports = { Homemodel };
