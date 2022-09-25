const nodemailer = require("nodemailer");
const process = require("process");
const dotenv = require("dotenv");
dotenv.config();
const password = process.env.APP_PASSWORD;
const emailAddress = process.env.EMAIL_ADDRESS;

const sendEmail = async (req, res, next) => {
  const form = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: emailAddress,
      pass: password,
    },
  });
  const mailOptions = {
    from: form.email,
    to: emailAddress,
    subject: form.subjet,
    text: form.message,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    res.json(result);
  } catch {
    res.json({ message: "error" });
  }
};

module.exports = {
  sendEmail,
};
