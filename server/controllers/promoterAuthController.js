const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Promoter = require("../model/promoterModel");

// Generate JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Register new promoter
module.exports.promoterRegister = asyncHandler(async (req, res) => {
  const { email, password, deviceToken } = req.body;

  console.log("regi login devidetoken", deviceToken);

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const userExists = await Promoter.findOne({ email });

  if (userExists) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const promoter = await Promoter.create({ email, password });

  if (promoter) {
    if (deviceToken) {
      await Promoter.findByIdAndUpdate(promoter._id, { deviceToken });
    }

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
  const { email, password, deviceToken } = req.body;

  console.log("login devidetoken", deviceToken);

  const promoter = await Promoter.findOne({ email });

  if (promoter && (await promoter.matchPassword(password))) {
    if (deviceToken) {
      await Promoter.findByIdAndUpdate(promoter._id, { deviceToken });
    }

    res.json({
      promoter,
      token: createToken(promoter._id),
    });
  } else {
    res.status(401).json({ msg: "Invalid email or password" });
  }
});

// Get promoter by ID without returning password
module.exports.getPromoterById = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  try {
    const promoter = await Promoter.findById(userId).select("-password");

    if (!promoter) {
      return res
        .status(404)
        .json({ success: false, msg: "Promoter not found" });
    }

    return res.status(200).json({ success: true, promoter });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports.saveDeviceToken = async (req, res) => {
  console.log("saving token saveDeviceToken", req.body);
  const { promoterId, deviceToken } = req.body;

  if (!promoterId || !deviceToken) {
    return res.status(400).json({ error: "Missing fields." });
  }

  try {
    await Promoter.findByIdAndUpdate(promoterId, { deviceToken });
    res.status(200).json({ message: "Device token saved successfully." });
  } catch (error) {
    console.error("Error saving device token:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
