const {
  register,
  login,
  addLink,
  addSocial,
  addBio,
  addName,
  addUsername,
  getUsername,
  getName,
  getBio,
  getLinks,
  getSocials,
  removeLink,
  removeSocial,
  getBioFromUsername,
  getNameFromUsername,
  getLinksFromUsername,
  getSocialsFromUsername,
  getEmailFromUsername,
  addProfilePic,
  getProfilePic,
  getProfilePicFromUsername,
  addBg,
  getBg,
  getBgFromUsername,
  trackOwnlinkViews,
  getViewsInformation,
  increaseSocialsViews,
  getAllSocialsViews,
  getAllLinksViews,
  increaseLinksViews,
  getOrders,
  submitOrder,
  cancelOrder,
  getUserFromUsername,
  getAllCreators,
  getCreator,
  getValidCreators,
} = require("../controllers/authcontroller");
const {
  promoterRegister,
  promoterLogin,
} = require("../controllers/promoterAuthController");
const {
  addscratchcard,
  getScratchCardsByUser,
} = require("../controllers/scratchCardController");
const { checkUser } = require("../middlewares/authmiddleware");

const router = require("express").Router();

router.post("/", checkUser);

router.post("/register", register);
router.post("/login", login);
//promoter login and signup
router.post("/promoterregister", promoterRegister);
router.post("/promoterlogin", promoterLogin);
router.post("/addscratchcard", addscratchcard);
router.get("/getscratchcardsbyuser/:promoterId", getScratchCardsByUser);

// old routes
router.post("/addusername", addUsername);
router.post("/addname", addName);
router.post("/addbio", addBio);
router.post("/addprofilepic", addProfilePic);
router.post("/addlink", addLink);
router.post("/addsocial", addSocial);
router.post("/addbg", addBg);
router.get("/username/:email", getUsername);
router.get("/name/:email", getName);
router.get("/getuserinfo/:username", getUserFromUsername);
router.get("/getallcreators", getAllCreators);
router.get("/getvalidcreators", getValidCreators);
router.get("/getcreator/:username", getCreator);
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

router.get("/increaseOwnlinkViews/:username", trackOwnlinkViews);
router.get("/getviewsinformation/:username", getViewsInformation);

router.get("/getAllSocialsViews/:username", getAllSocialsViews);
router.post("/increaseSocialsViews/:username", increaseSocialsViews);

router.get("/getAllLinksViews/:username", getAllLinksViews);
router.post("/increaseLinksViews/:username", increaseLinksViews);

router.post("/submitOrder", submitOrder);
router.get("/getOrders/:email", getOrders);

router.delete("/cancelOrder/:order_id", cancelOrder);

module.exports = router;
