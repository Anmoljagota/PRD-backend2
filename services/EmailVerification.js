const nodemailer = require("nodemailer");

const Email_Verification = (email,otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = {
    from: "anmoljagota08@gmail.com",
    to: email,
    subject: "email verification shop.com",
    html: `
            <b>Hello!</b>
            <p>You are receiving this email because we received an OTP request for your account.</p>
            <p>${otp}</p>
            <p>If you did not request an OTP, no further action is required.</p>
            <p>Regards,</p>
            <p>shop.com</p>
          `,
  };
  return { transporter, info };
};

module.exports = Email_Verification;
