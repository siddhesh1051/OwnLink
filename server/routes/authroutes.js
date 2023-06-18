const { register, login, addLink, addSocial, addBio, addName, addUsername, getUsername, getName, getBio, getLinks, getSocials, removeLink, removeSocial, getBioFromUsername, getNameFromUsername, getLinksFromUsername, getSocialsFromUsername, getEmailFromUsername, addProfilePic, getProfilePic, getProfilePicFromUsername, addBg, getBg, getBgFromUsername } = require("../controllers/authController");
const { checkUser } = require("../middlewares/authmiddleware");

const router = require("express").Router();

router.post("/", checkUser); 

router.post("/register", register);
router.post("/login", login);
router.post("/addusername", addUsername);
router.post("/addname", addName);
router.post("/addbio", addBio);
router.post("/addprofilepic", addProfilePic);
router.post("/addlink", addLink);
router.post("/addsocial", addSocial);
router.post("/addbg", addBg);
router.get("/username/:email", getUsername);
router.get("/name/:email", getName);
router.get("/namefromusername/:username", getNameFromUsername);
router.get("/bio/:email", getBio);
router.get("/biofromusername/:username", getBioFromUsername);
router.get("/profilepic/:email", getProfilePic);
router.get("/profilepicfromusername/:username", getProfilePicFromUsername);
router.get("/bg/:email", getBg);
router.get("/bgfromusername/:username", getBgFromUsername);
router.get("/links/:email", getLinks);
router.get("/linksfromusername/:username", getLinksFromUsername);
router.get("/socials/:email", getSocials);
router.get("/socialsfromusername/:username", getSocialsFromUsername);
router.get("/email/:username", getEmailFromUsername);
router.put("/removelink", removeLink);
router.put("/removesocial", removeSocial);




module.exports = router;