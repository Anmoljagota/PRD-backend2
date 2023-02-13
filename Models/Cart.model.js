const mongoose = require("mongoose");
const cartschema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clothesProducts",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});
const Cartmodel = mongoose.model("Cartdata", cartschema);
module.exports = {
  Cartmodel,
};
