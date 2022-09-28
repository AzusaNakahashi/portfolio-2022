const express = require("express");
const router = express.Router();
const emailController = require("../controllers/emailController.js");

router.post("/send", emailController.sendEmail);

module.exports = router;
