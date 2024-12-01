const { Expo } = require("expo-server-sdk");

// Create a new Expo SDK client
const expo = new Expo();

async function sendNotification(deviceToken, title, body) {
  // Create a message
  const messages = [];
  if (!Expo.isExpoPushToken(deviceToken)) {
    console.error(`Push token ${deviceToken} is not a valid Expo push token`);
    return;
  }

  messages.push({
    to: deviceToken,
    sound: "default",
    title: title,
    body: body,
  });

  try {
    console.log("Sending notification via Expo...");
    const ticketChunk = await expo.sendPushNotificationsAsync(messages);
    console.log("Notification sent successfully:", ticketChunk);
  } catch (error) {
    console.error("Error sending notification via Expo:", error);
  }
}

module.exports = { sendNotification };
