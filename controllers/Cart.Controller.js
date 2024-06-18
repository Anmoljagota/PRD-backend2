const { Cartmodel } = require("../Models/Cart.model");
const AddItemToCart = async (req, res) => {
  const { product, userId } = req.body;

  try {
    const cart = new Cartmodel({ userId, product });
    await cart.save();
    const getcartdata = await Cartmodel.find({ userId: userId });
    res.send(getcartdata);
  } catch (err) {
    res.send(`error:${err}`);
  }
};

const DeleteCartItem = async (req, res) => {
  try {
    const ID = req.params.id;
    await Cartmodel.findOneAndDelete({ product: ID });
    res.send("data deleted");
  } catch (err) {
    res.send(err);
  }
};

const GetAllCartItem = async (req, res) => {
  try {
    const finduser = req.body.userId;
    const user = await Cartmodel.find({ userId: finduser });

    if (user.length > 0) {
      const cart = await Cartmodel.find({ userId: finduser }).populate([
        "product",
        "userId",
      ]);
      res.send(cart);
    } else {
      res.send("authorization first");
    }
  } catch (err) {
    res.send(`error:${err}`);
  }
};

module.exports = { AddItemToCart, DeleteCartItem, GetAllCartItem };
