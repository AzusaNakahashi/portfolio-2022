const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoutes = require("./routes/emailRouter");
require("dotenv").config();
const port = process.env.PORT || 5000;
const frontEndURI = process.env.FRONT_END_URI;

// Cors setting
const corsOptions = {
  origin: frontEndURI,
  optionSuccessStatus: 200,
};
// Error handling middleware functionality
const errorHandler = (error, req, res, next) => {
  console.log(`ERROR ${error.message}`);
  const status = error.status || 500;
  res.status(status).send(error.message);
};
app.use(cors(corsOptions));
// Body Parser Middleware
app.use(bodyParser.json());
// Routes
app.use("/email", emailRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
