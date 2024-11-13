const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Promoter = require("../model/promoterModel");

// Generate JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register new promoter
module.exports.promoterRegister = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const userExists = await Promoter.findOne({ email });

  if (userExists) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const promoter = await Promoter.create({ email, password });

  if (promoter) {
    res.status(201).json({
      promoter,
      token: createToken(promoter._id),
    });
  } else {
    res.status(400).json({ msg: "Invalid promoter data" });
  }
});

// Login existing promoter
module.exports.promoterLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const promoter = await Promoter.findOne({ email });

  if (promoter && (await promoter.matchPassword(password))) {
    res.json({
      promoter,
      token: createToken(promoter._id),
    });
  } else {
    res.status(401).json({ msg: "Invalid email or password" });
  }
});
