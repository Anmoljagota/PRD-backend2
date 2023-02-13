const mongoose = require("mongoose");
const clothesSchema = mongoose.Schema({
  image: String,
  discount: Number,
  description: String,
  price: Number,
  brand: String,
  prev_price: Number,
  deals: String,
  sizes: String,
  size: String,
  category: String,
  delivery: String,
  colors: String,
});
const clothesmodel = mongoose.model("clothesProducts", clothesSchema);
module.exports = { clothesmodel };
