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
    default: "",
  },

});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  // console.log(user);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    // console.log(auth)
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};


module.exports = mongoose.model("user", userSchema);
