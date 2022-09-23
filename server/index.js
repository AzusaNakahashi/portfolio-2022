const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
// google
const fs = require("fs");
const path = require("path");
const process = require("process");
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");
const credentials = require("./credentials.json");
// from env
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const email = process.env.EMAIL;

// Cors setting
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200,
};

// Google Authetication
/*
const REDIRECT_URI = "http://localhost:5000";
//const TOKEN_PATH = path.join(process.cwd(), "token.json");
//const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");


/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
/*
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
/*
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
/*
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
/*
async function listLabels(auth) {
  const gmail = google.gmail({ version: "v1", auth });
  const res = await gmail.users.labels.list({
    userId: "me",
  });
  const labels = res.data.labels;
  if (!labels || labels.length === 0) {
    console.log("No labels found.");
    return;
  }
  console.log("Labels:");
  labels.forEach((label) => {
    console.log(`- ${label.name}`);
  });
}

authorize().then(listLabels).catch(console.error);*/

const { client_secret, client_id, redirect_uris } = credentials.installed;

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

const scopes = ["https://www.googleapis.com/auth/gmail.send"];

const authorizationUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: scopes,
  include_granted_scopes: true,
});

console.log("Authorize this app by visiting this url:", authorizationUrl);

//res.writeHead(301, { Location: authorizationUrl });
/*
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "oAuth2",
        user: email,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accsessToken: accessToken,
      },
    });
    const mailOptions = {
      from: email,
      to: email,
      subject: "hello from gmail",
      text: "hello",
      html: "<h1>hello</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("email sent", result))
  .catch((error) => console.log(error.message));

*/

// View engine setup
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {});

app.get("/", (req, res) => {
  res.render(`contact`, { layout: false });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
