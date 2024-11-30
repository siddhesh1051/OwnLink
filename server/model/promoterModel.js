const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const promoterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  rewardPoints: {
    type: Number,
    default: 0,
  },
  resetTime: {
    type: Date,
    default: Date.now(),
  },
  todayscCount: {
    type: Number,
    default: 0,
  },
});

promoterSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password before saving
promoterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Promoter", promoterSchema);
