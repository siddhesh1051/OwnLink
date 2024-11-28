const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  points: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  transactionType: {
    type: String,
    default: "",
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("transaction", transactionSchema);
