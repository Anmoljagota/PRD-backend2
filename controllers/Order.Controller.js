const nodemailer = require("nodemailer");
const Order = async (req, res) => {
  otp = Math.floor(100000 + Math.random() * 900000);
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "anmoljagota08@gmail.com",
      pass: process.env.EMAILPASSWORD,
    },
  });
};

module.exports = Order;
