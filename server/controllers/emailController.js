const nodemailer = require("nodemailer");
const process = require("process");
require("dotenv").config();
const password = process.env.APP_PASSWORD;
const emailAddress = process.env.EMAIL_ADDRESS;

exports.sendEmail = async (req, res, next) => {
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
    subject: `${form.name}, ${form.subject}`,
    text: form.message,
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};
