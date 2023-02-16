const express = require("express");
const { middleware } = require("../Middlewares/Middlewares");
const { Cartmodel } = require("../Models/Cart.model");
const cartRoute = express.Router();
cartRoute.post("/", middleware, async (req, res) => {
  console.log("hiiiiiiiiiiiii", req.body);
  const { product, userId } = req.body;
  let findproduct = await Cartmodel.find({ product });

  try {
    const cart = new Cartmodel({ userId, product });
    await cart.save();
    const getcartdata = await Cartmodel.find({ userId: userId });
    console.log("i am getcarddata", getcartdata);
    res.send(getcartdata);
  } catch (err) {
    res.send(`error:${err}`);
  }
});
cartRoute.get("/", middleware, async (req, res) => {
  console.log("heyyyyyyyyyyy");
  try {
    const finduser = req.body.userId;
    console.log("finduser", finduser);
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
});
cartRoute.delete("/:id", async (req, res) => {
  try {
    const ID = req.params.id;
    await Cartmodel.findOneAndDelete({ product: ID });
    res.send("data deleted");
  } catch (err) {
    res.send(err);
  }
});
module.exports = {
  cartRoute,
};
