require("dotenv").config();
const { categoryRoute } = require("./Routes/CategoryRoute");
const { connection } = require("./Config/db");
const { clothesProductRoute } = require("./Routes/Clothes.Route");
const { userRouter } = require("./Routes/User.route");
const { cartRoute } = require("./Routes/Cart.route");
const { homeProductRoute } = require("./Routes/HomeProduct");
const {AdminProduct}=require("./Routes/AdminProduct.Route")
const {detailsroute}=require("./Routes/UserDetails.route")
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/category", categoryRoute);
app.use("/homeproduct", homeProductRoute);
app.use("/fashion", clothesProductRoute);
app.use("/", userRouter);
app.use("/cartdata", cartRoute);
app.use("/address",detailsroute)
app.use("/admin",AdminProduct)
app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(`error:${err}`);
  }
  console.log(`server is listening on port ${process.env.PORT}`);
});
