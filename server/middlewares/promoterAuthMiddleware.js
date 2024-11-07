const Promoter = require("../model/authmodel");
const jwt = require("jsonwebtoken");

module.exports.checkPromoterUser = async (req, res, next) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, "secret", async (err, decodedToken) => {
      if (err) {
        res.json({ status: false });
        next();
      } else {
        const promoter = await Promoter.findById(decodedToken.id).populate(
          "scratchCards"
        );
        if (promoter) {
          res.json({
            status: true,
            user: promoter.email,
            rewardPoints: promoter.rewardPoints,
            scratchCards: promoter.scratchCards,
          });
        } else {
          res.json({ status: false });
        }
        next();
      }
    });
  } else {
    res.json({ status: false });
    next();
  }
};
