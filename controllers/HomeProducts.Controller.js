const { Homemodel } = require("../Models/HomePageProduct");

const GetHomeProduct = async (req, res) => {
  try {
    const { page, limit } = req.query;
    if (!page) {
      page = 1;
    }
    let newlimit = Number(limit);
    let size = (page - 1) * limit;
    let paginateddata = await Homemodel.find({}).limit(newlimit).skip(size);
    res.send(paginateddata);
  } catch (err) {
    res.send(`error:${err}`);
  }
};

const AddHomeProducts = async (req, res) => {
  try {
    const PostData = new Homemodel(req.body);
    await PostData.save();
    res.send("data added");
  } catch (err) {
    res.send(`err`);
  }
};
module.exports = { GetHomeProduct, AddHomeProducts };
