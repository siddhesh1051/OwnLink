const User = require("../model/authmodel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const  {token}  = req.body;
//   const excluded = ['http://localhost:3000/gents', 'http://localhost:3000/sd'];
// if (excluded.indexOf(req.url) > -1) return next();


  
  if (token) {
    jwt.verify(
      token,
      "secret",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.email});
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};

