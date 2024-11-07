const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const scratchCardSchema = mongoose.Schema({
  scratchCardId: {
    type: String,
    default: uuidv4, // Generates a unique ID using UUID
    unique: true, // Ensures each scratch card ID is unique
  },
  isRevealed: {
    type: Boolean,
    default: false,
  },
  points: {
    type: Number,
    required: true,
  },
  promoter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Promoter",
    required: true,
  },
});

module.exports = mongoose.model("ScratchCard", scratchCardSchema);
