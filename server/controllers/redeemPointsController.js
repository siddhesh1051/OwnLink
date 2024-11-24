const Promoter = require("../model/promoterModel");
const Otp = require("../model/otpModel");
const { sendMail } = require("../helpers/sendMail");
const { verifyotpHTML } = require("../helpers/verifyotpHTML");

const redeemPoints = async (points, user) => {
  try {
    user.rewardPoints -= points;
    await user.save();
    return { status: 200, message: "Points redeemed successfully" };
  } catch {
    return { status: 400, message: "Internal server error" };
  }
};

module.exports.sendRedeemOTP = async (req, res) => {
  const { email, requiredPoints } = req.body;
  try {
    console.log(email);
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);

    const promoter = await Promoter.findOne({
      email,
    });

    console.log(promoter);

    if (promoter.rewardPoints < requiredPoints) {
      return res.status(400).json({ message: "Insufficient points" });
    }

    if (!promoter) {
      return res.status(400).json({ message: "User not found" });
    }

    const otpDoc = await Otp.findOne({ user: promoter._id });
    if (otpDoc) {
      otpDoc.otp = otp;
      await otpDoc.save();
      await sendMail(
        email,
        "Ownlink - OTP for redeeming points",
        verifyotpHTML(otp, requiredPoints)
      );
    } else {
      await Otp.create({
        otp,
        user: promoter._id,
      });
      await sendMail(
        email,
        "Ownlink - OTP for redeeming points",
        verifyotpHTML(otp, requiredPoints)
      );
    }

    return res
      .status(200)
      .json({ otpId: otpDoc._id, message: "OTP sent successfully" });
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.verifyRedeemOTP = async (req, res) => {
  const { inputOtp, otpId, userId, points } = req.body;
  try {
    const otpDoc = await Otp.findById(otpId);
    if (!otpDoc) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (otpDoc.otp !== inputOtp) {
      return res.status(400).json({ message: "Incorrect OTP" });
    }

    if (otpDoc.user.toString() !== userId) {
      return res.status(400).json({ message: "Invalid user" });
    }

    const promoter = await Promoter.findById(userId);
    if (!promoter) {
      return res.status(400).json({ message: "User not found" });
    }
    if (promoter.rewardPoints < points) {
      return res.status(400).json({ message: "Insufficient points" });
    }
    const { status, message } = await redeemPoints(points, promoter);

    if (status === 200) {
      return res.status(200).json({ message });
    } else {
      return res.status(400).json({ message });
    }
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};
