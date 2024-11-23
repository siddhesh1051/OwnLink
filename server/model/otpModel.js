const mongoose = require("mongoose");

const otpSchema = mongoose.Schema({
  otp: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("otp", otpSchema);
