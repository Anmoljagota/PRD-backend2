const mongoose=require("mongoose");
const categorySchema={
    "image":String,
    "category":String
}
const CategoryModel=mongoose.model("ProjectCategories",categorySchema)
module.exports={
    CategoryModel
}