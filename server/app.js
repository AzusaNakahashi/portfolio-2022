const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const process = require("process");
// from env
const dotenv = require("dotenv");
const { send } = require("process");
const { response } = require("express");
dotenv.config();
const port = process.env.PORT;
const password = process.env.APP_PASSWORD;
const emailAddress = process.env.EMAIL_ADDRESS;

// Cors setting
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

const sendForm = async (form) => {
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
    subject: form.subject,
    text: form.message,
    html: "<h1>hello</h1>",
  };
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log(result);
    response.redirect("/");
    return result;
  } catch (error) {
    return error.message;
  }
};

app.use(cors(corsOptions));
//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  console.log(req.body);
  sendForm(req.body);
});

app.get("/", (req, res) => {
  res.render(`contact`, { layout: false });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
