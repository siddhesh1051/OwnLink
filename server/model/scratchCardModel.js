const mongoose = require("mongoose");

const scratchCardSchema = mongoose.Schema({
  isRevealed: {
    type: Boolean,
    default: false,
  },
  points: {
    type: Number,
    required: false,
    default: 0,
  },
  promoter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Promoter",
    required: true,
  },
});

module.exports = mongoose.model("ScratchCard", scratchCardSchema);
