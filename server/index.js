const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const emailRoutes = require("./routes/emailRouter");
// from env
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const frontEndURI = process.env.FRONT_END_URI;

// Cors setting
const corsOptions = {
  origin: frontEndURI,
  optionSuccessStatus: 200,
};
//Body Parser Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/email", emailRoutes);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
