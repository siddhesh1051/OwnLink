const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Password is Required"],
  },

  links: {
    type: Array,
    default: [],
  },

  socials: {
    type: Array,
    default: [],
  },

  username: {
    type: String,
    default: "",
    unique: true,
  },

  name: {
    type: String,
    default: "",
  },

  bio: {
    type: String,
    default: "",
  },
  profilePic: {
    type: String,
    default: "",
  },
  bg: {
    type: String,
    default:
      "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/ozvno1ml5j6pq1qccbxs.jpg",
  },
  ownlink: {
    type: String,
    default: "",
  },
  ownlinkViews: {
    type: Number,
    default: 0,
  },
  viewsHistory: [
    {
      timestamp: {
        type: Date,
        required: true,
      },
    },
  ],
  orders: {
    type: Array,
    default: [],
    timestamps: true,
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("user", userSchema);
