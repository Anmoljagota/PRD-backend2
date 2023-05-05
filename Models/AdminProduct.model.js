const mongoose=require("mongoose")
const adminproductSchema=mongoose.Schema({
    
    userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Users",
required:true
    },
    image: String,
    discount: Number,
    description: String,
    price: Number,
    brand: String,
    prev_price: Number,
    deals: String,
    sizes: String,
    size: String,
    category: String,
    delivery: String,
    colors: String,
})
const AdminProductModel=mongoose.model("Adminproduct",adminproductSchema)
module.exports={
    AdminProductModel
}