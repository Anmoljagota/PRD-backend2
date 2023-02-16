const mongoose = require("mongoose");
const userdetailsSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  homeaddress: String || Number,
  landmark: Number,
  pincode: Number,
  locality: String,
  city: String,
  state: String,
  name: String,
  phonenumber: Number,
});
const userdetailsModel = mongoose.model("UserDetails", userdetailsSchema);
module.exports = {
  userdetailsModel,
};
