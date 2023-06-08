const { register, login, addLink, addSocial, addBio, addName, addUsername, getUsername, getName, getBio, getLinks, getSocials } = require("../controllers/authController");
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
router.get("/username/:email", getUsername);
router.get("/name/:email", getName);
router.get("/bio/:email", getBio);
router.get("/links/:email", getLinks);
router.get("/socials/:email", getSocials);



module.exports = router;