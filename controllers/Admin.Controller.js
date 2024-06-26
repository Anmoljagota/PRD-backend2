const { AdminProductModel } = require("../Models/AdminProduct.model");
const AddAdmin = async (req, res) => {
  try {
    const findadmin = req.body.userId;
    const productadded = new AdminProductModel(req.body);
    await productadded.save();
    const admin = await AdminProductModel.find({ userId: findadmin });
    if (admin.length > 0) {
      const adminname = await AdminProductModel.find({
        userId: findadmin,
      }).populate("userId");
      res.send(adminname);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { AddAdmin };
