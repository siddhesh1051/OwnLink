const { register, login, addLink, addSocial, addBio, addName, addUsername } = require("../controllers/authController");
const { checkUser } = require("../middlewares/authmiddleware");

const router = require("express").Router();

router.post("/", checkUser); 

router.post("/register", register);
router.post("/login", login);
router.post("/addusername", addUsername);
router.post("/addname", addName);
router.post("/addbio", addBio);
router.post("/addlink", addLink);
router.post("/addsocial", addSocial);

router

module.exports = router;