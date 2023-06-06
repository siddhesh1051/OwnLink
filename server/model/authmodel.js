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
    required: [true, "Username is Required"],
    unique: true,
  },

name: {
    type: String,
    required: [true, "Name is Required"],
  },

bio: {
    type: String,
    default: "",
  },




  // profilePicture: {
  //   type: String,
  //   default: "https://res.cloudinary
  //   .com/dx0wpoeyu/image/upload/v1
  //   620846388/Profile_Pictures/default_profile_picture
  //   .png",
  // },

});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  userSchema.statics.login = async function (email, password) {
      const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };


module.exports = mongoose.model("user", userSchema);
