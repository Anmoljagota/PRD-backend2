const mongoose = require("mongoose");
const registerSchema = mongoose.Schema(
  {
    email: { type: String, required: true, min: 8, unique: true },
    Name:String,
    PhoneNumber:Number,
    Password:String,
    Position:String,
   Image:String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const UserModel = mongoose.model("Users", registerSchema);
module.exports = {
  UserModel,
};
