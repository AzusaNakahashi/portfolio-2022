const { google } = require("googleapis");
const MailComposer = require("nodemailer/lib/mail-composer");
const credentials = require("./credentials.json");
const tokens = require("./token.json");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const email = process.env.EMAIL;

const getGmailService = () => {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
  return gmail;
};

const encodeMessage = (message) => {
  return Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
};

const sendMail = async (options) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const { data: { id } = {} } = await gmail.users.messages.send({
    userId: "me",
    resource: {
      raw: rawMessage,
    },
  });
  return id;
};

const main = async () => {
  const options = {
    to: email,
    replyTo: email,
    subject: "Hello",
    text: "This email is sent from the command line",
    html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b>.</p>`,
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Azua" },
      { key: "X-Application-Version", value: "v1.0.0.2" },
    ],
  };

  const messageId = await sendMail(options);
  return messageId;
};

main()
  .then((messageId) => console.log("Message sent successfully:", messageId))
  .catch((err) => console.error(err));
