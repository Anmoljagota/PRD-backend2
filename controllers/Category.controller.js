const { CategoryModel } = require("../Models/CategoryModel");
const GetCategory = async (req, res) => {
  try {
    const CategoryData = await CategoryModel.find({});
    res.send(CategoryData);
  } catch (err) {
    res.send(`error:${err}`);
  }
};

const PostCategory = async (req, res) => {
  try {
    const PostData = new CategoryModel(req.body);
    await PostData.save();
    res.send("data added");
  } catch (err) {
    res.send(`err`);
  }
};
module.exports = { GetCategory, PostCategory };
