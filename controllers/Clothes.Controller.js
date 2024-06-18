const { clothesmodel } = require("../Models/Clothes.model");
const GetProducts = async (req, res) => {
  if (req.query._sort && req.query.category) {
    const sortBy = req.query._sort[0];
    if (sortBy === "disc") {
      data = 1;
    } else {
      sortBy === "LTH" ? (data = 1) : (data = -1);
    }
    try {
      sortBy === "disc"
        ? (categorydata = await clothesmodel
            .find({
              category: req.query.category,
            })
            .sort({ discount: data }))
        : (categorydata = await clothesmodel
            .find({
              category: req.query.category,
            })
            .sort({ price: data }));
      res.send(categorydata);
    } catch (err) {
      res.send(err);
    }
  } else if (req.query.category) {
    try {
      let categorydata = await clothesmodel.find({
        category: req.query.category,
      });
      res.send(categorydata);
    } catch (err) {
      res.send(err);
    }
  } else if (req.query.page && req.query.limit) {
    try {
      const { page, limit } = req.query;
      if (!page) {
        page = 1;
      }
      let newlimit = Number(limit);
      let size = (page - 1) * limit;
      let paginateddata = await clothesmodel
        .find({})
        .limit(newlimit)
        .skip(size);
      res.send(paginateddata);
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else if (req.query._sort) {
    try {
      const sortBy = req.query._sort[0];
      if (sortBy === "disc") {
        data = 1;
      } else {
        sortBy === "LTH" ? (data = 1) : (data = -1);
      }
      sortBy === "disc"
        ? (sortdata = await clothesmodel.find({}).sort({ discount: data }))
        : (sortdata = await clothesmodel.find({}).sort({ price: data }));
      res.send(sortdata);
    } catch (err) {
      res.send(err);
    }
  } else if (req.query.q) {
    try {
      let searchdata = await clothesmodel.find({
        description: { $regex: `${req.query.q}`, $options: "i" },
      });
      res.send(searchdata);
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else if (req.query.allproducts) {
    try {
      let productdata = await clothesmodel.find({});
      res.send(productdata);
    } catch (err) {
      res.send(err);
    }
  } else {
    try {
      let productdata = await clothesmodel.find({ _id: req.body });
      res.send(productdata);
    } catch (err) {
      res.send(err);
    }
  }
};

AddProducts = async (req, res) => {
  if (req.body.product) {
    try {
      let productdata = await clothesmodel.find({ _id: req.body.product });
      res.send(productdata);
    } catch (err) {
      res.send(err);
    }
  } else {
    try {
      const PostData = new clothesmodel(req.body);
      await PostData.save();
      res.send(PostData);
    } catch (err) {
      res.send(`err`);
    }
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const ID = req.params.id;
    await clothesmodel.findOneAndDelete({ _id: ID });
    res.send("data deleted");
  } catch (err) {
    res.send(err);
  }
};
module.exports = { GetProducts, AddProducts, DeleteProduct };
