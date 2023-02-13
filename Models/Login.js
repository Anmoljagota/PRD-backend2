const mongoose = require("mongoose");
const registerSchema = mongoose.Schema(
  {
    email: { type: String, required: true, min: 8, unique: true },
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
