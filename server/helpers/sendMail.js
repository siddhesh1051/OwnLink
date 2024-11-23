"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ownlinkmail@gmail.com",
    pass: "izixthmzszwpbcyo",
  },
});

async function sendMail(to, subject, html) {
  const info = await transporter.sendMail({
    from: "ownlinkmail@gmail.com",
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { sendMail };
