import React, { forwardRef, useEffect, useState } from "react";
import { Avatar, TextField } from "@mui/material";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import "../../src/App.css";
import Instagram from "./icons/instagram.png";
import Youtube from "./icons/youtube.png";
import Facebook from "./icons/facebook.png";
import Twitter from "./icons/twitter.png";
import Reddit from "./icons/reddit.png";
import Telegram from "./icons/telegram.png";
import Web from "./icons/web.png";
import Linkedin from "./icons/linkedin.png";
import Pinterest from "./icons/pinterest.png";
import Snapchat from "./icons/snapchat.png";
import Twitch from "./icons/twitch.png";
import Gmail from "./icons/gmail.png";
import Behance from "./icons/behance.png";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Social from "./Social";
import Links from "./Links";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUsername } from "../store/usernameSlice";
import { getName } from "../store/nameSlice";
import { getBio } from "../store/bioSlice";
import { TbPencilMinus } from "react-icons/tb";
import toast, { Toaster } from "react-hot-toast";
import { getLinks } from "../store/linkSlice";
import Appearence from "./Appearence";
import { motion } from "framer-motion";
import Analytics from "./Analytics";
import SyncButton from "./SyncButton";
import GoogleAnalyticsComponent from "./GoogleAnalyticsComponent";

const Right = ({ text, update, setUpdate }, ref) => {
  const [value, setvalue] = useState(1);
  const [acc, setacc] = useState("facebook");
  const [open, setOpen] = useState(false);
  const [LinkModal, setLinkModal] = useState(false);
  const [link, setLink] = useState("");
  const [UrlLink, setUrlLink] = useState("");
  const [type, setType] = useState("");
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [bio, setbio] = useState("");
  const [title, settitle] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [linkImage, setLinkImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const socialVar = useSelector((state) => state.social);
  const usernameVar = useSelector((state) => state.username);
  const nameVar = useSelector((state) => state.name);
  const bioVar = useSelector((state) => state.bio);

  const currUsername = usernameVar.username;
  const currName = nameVar.name;
  const currBio = bioVar.bio;
  const currProfilePic = profilePic;

  localStorage.setItem(
    "userData",
    JSON.stringify({
      currUsername,
      currName,
      currBio,
      currProfilePic,
    })
  );

  const email = localStorage.getItem("email");
  let localUsername = localStorage.getItem("username");

  // console.log(email)

  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Set your threshold width for mobile devices (e.g., 768px)
      const mobileThresholdWidth = 768;

      // Check if the current window width is less than the threshold
      if (window.innerWidth < mobileThresholdWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add an event listener to check on window resize
    window.addEventListener("resize", checkIfMobile);

    // Initial check
    checkIfMobile();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    dispatch(getUsername(email));
    dispatch(getName(email));
    dispatch(getBio(email));
    dispatch(getLinks(email));
    // dispatch(getPic(email));

    handleGetProfilePic(email);

    setusername(localStorage.getItem("username"));
    let userData = localStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      setusername(userData.currUsername);
      setname(userData.currName);
      setbio(userData.currBio);
      setProfilePic(userData.currProfilePic);
    }

    localStorage.getItem("username");

    // console.log(currUsername, currName, currBio, currProfilePic)
  }, [currUsername, currName, currBio, currProfilePic, update]);
  // console.log(acc)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    // console.log(file)

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ownlink");
    formData.append("cloud_name", "dvdox1fzz");

    toast
      .promise(
        axios.post(
          "https://api.cloudinary.com/v1_1/dvdox1fzz/image/upload",
          formData
        ),
        {
          loading: "Uploading...",
          success: <b>Profile Picture Updated</b>,
          error: <b>Upload failed!</b>,
        }
      )

      .then((res) => {
        console.log(res.data.url);
        setProfilePic(res.data.url);
        handleAddProfilePic(email, res.data.url);
      })
      .catch((err) => console.log(err));
  };

  const handleLinkImageUpload = async (e) => {
    const linkfile = e.target.files[0];
    // console.log(file)

    const formData = new FormData();
    formData.append("file", linkfile);
    formData.append("upload_preset", "ownlink");
    formData.append("cloud_name", "dvdox1fzz");

    toast
      .promise(
        axios.post(
          "https://api.cloudinary.com/v1_1/dvdox1fzz/image/upload",
          formData
        ),
        {
          loading: "Uploading...",
          success: <b>"Background Image Uploaded"</b>,
          error: <b>Upload failed!</b>,
        }
      )

      .then((res) => {
        console.log(res.data.url);
        setLinkImage(res.data.url);
        // handleAddProfilePic(email, res.data.url)
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event, newVal) => {
    setvalue(newVal);
  };
  const handleInputChange = (event) => {
    setLink(event.target.value);
  };
  const handleLinkInputChange = (event) => {
    setUrlLink(event.target.value);
  };
  const handleTitleInputChange = (event) => {
    settitle(event.target.value);
  };
  const handleUsernameInputChange = (event) => {
    setusername(event.target.value);
  };
  const handleNameInputChange = (event) => {
    setname(event.target.value);
  };
  const handleBioInputChange = (event) => {
    setbio(event.target.value);
  };

  const handleNavigation = (UrlLink) => {
    let url = UrlLink.toLowerCase();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      let newurl = `https://${url}`;
      UrlLink = newurl;
    }
    return UrlLink;
  };
  const handleSocialNavigation = (UrlLink, acc) => {
    let url = UrlLink.toLowerCase();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      if (acc === "gmail") {
        let newurl = `mailto:${url}`;
        UrlLink = newurl;
      } else {
        let newurl = `https://${url}`;
        UrlLink = newurl;
      }
    }
    return UrlLink;
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle username update
      const usernameResponse = await axios.post(
        process.env.REACT_APP_API + "/addusername",
        {
          email,
          username_from_body: username,
        }
      );

      if (usernameResponse.data.status === 200) {
        localStorage.setItem("username", username);
        // Immediately update Redux store with new username
        dispatch({
          type: "username/setUsername",
          payload: username,
        });
      } else if (
        localUsername !== username &&
        usernameResponse.data.status === 401
      ) {
        toast.error(usernameResponse.data.msg);
        return; // Stop if username update failed
      }

      // Handle name update
      await axios.post(process.env.REACT_APP_API + "/addname", {
        email,
        name_from_body: name,
      });
      // Update Redux store with new name
      dispatch({
        type: "name/setName",
        payload: name,
      });

      // Handle bio update
      await axios.post(process.env.REACT_APP_API + "/addbio", {
        email,
        bio_from_body: bio,
      });
      // Update Redux store with new bio
      dispatch({
        type: "bio/setBio",
        payload: bio,
      });

      toast.success("Saved");
      setUpdate(!update);
    } catch (err) {
      console.error(err);
      toast.error("Something Went Wrong !!");
    }
  };

  const handleDispatch = async (email, link) => {
    link = handleSocialNavigation(link, acc);

    const { data } = await axios.post(
      process.env.REACT_APP_API + "/addsocial",
      {
        email,
        link,
        type: acc,
        linkClicks: 0,
      }
    );
    console.log(data);
    setUpdate(!update);
  };

  const validateUrl = (url) => {
    try {
      // Try to construct a URL object
      new URL(url);
      return true;
    } catch (err) {
      // If URL is invalid, try adding https:// and check again
      try {
        new URL(`https://${url}`);
        return true;
      } catch (err) {
        return false;
      }
    }
  };

  const handleAddlink = async (email, UrlLink, title, linkImage) => {
    // Validate URL
    if (!validateUrl(UrlLink)) {
      toast.error("Please enter a valid URL");
      return;
    }

    // Format URL if needed
    let formattedUrl = UrlLink;
    if (!UrlLink.startsWith("http://") && !UrlLink.startsWith("https://")) {
      formattedUrl = `https://${UrlLink}`;
    }

    try {
      await axios.post(process.env.REACT_APP_API + "/addlink", {
        email,
        link: formattedUrl,
        title,
        linkImage,
        linkClicks: 0,
      });

      // Clear form fields
      setUrlLink("");
      settitle("");
      setLinkImage("");

      // Update links in Redux
      dispatch(getLinks(email));
      toast.success(
        isEditing ? "Link Updated Successfully" : "Link Added Successfully"
      );
      setUpdate(!update);
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong !!");
    }
  };

  const handleAddProfilePic = async (email, profilePic) => {
    console.log(email, profilePic);
    const { data } = await axios.post(
      process.env.REACT_APP_API + "/addprofilepic",
      {
        email,
        profile_pic_from_body: profilePic,
      }
    );
    // console.log(data)
    setUpdate(!update);
  };

  const handleGetProfilePic = async (email) => {
    // console.log(email)
    const { data } = await axios.get(
      process.env.REACT_APP_API + `/profilepic/${email}`
    );
    // console.log(data)
    setProfilePic(data.profilePic);
  };

  return (
    <motion.div
      ref={ref}
      className="flex-1"
      animate={{ x: 0 }}
      initial={{ x: 500 }}
      transition={{ duration: 0.4 }}
    >
      <Tabs
        size={isMobile ? "sm" : "lg"}
        onChange={handleChange}
        aria-label="Plain tabs"
        defaultValue={value}
        sx={{
          color: "white",
          backgroundColor: "#161a23",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      >
        <TabList
          color="primary"
          variant="plain"
          sx={{ backgroundColor: "#222430" }}
        >
          <Tab
            label="Bio"
            value={1}
            variant={value === 1 ? "solid" : "plain"}
            color={value === 1 ? "info" : "info"}
            sx={{
              fontSize: isMobile ? "16px" : "22px",
              transitionDuration: "200ms",
              ":hover": { backgroundColor: "#0F1015", color: "#a353fa" },
              color: value === 1 ? "white" : "#b876ff",
            }}
          >
            Bio
          </Tab>
          <Tab
            label="Links"
            value={2}
            variant={value === 2 ? "solid" : "plain"}
            color={value === 2 ? "info" : "info"}
            sx={{
              fontSize: isMobile ? "16px" : "22px",
              transitionDuration: "200ms",
              ":hover": { backgroundColor: "#0F1015", color: "#a353fa" },
              color: value === 2 ? "white" : "#b876ff",
            }}
          >
            Links
          </Tab>
          <Tab
            label="Appearance"
            value={3}
            variant={value === 3 ? "solid" : "plain"}
            color={value === 3 ? "info" : "info"}
            sx={{
              fontSize: isMobile ? "16px" : "22px",
              transitionDuration: "200ms",
              ":hover": { backgroundColor: "#0F1015", color: "#a353fa" },
              color: value === 3 ? "white" : "#b876ff",
            }}
          >
            Appearance
          </Tab>
          <Tab
            label="Analytics"
            value={4}
            variant={value === 4 ? "solid" : "plain"}
            color={value === 4 ? "info" : "info"}
            sx={{
              fontSize: isMobile ? "16px" : "22px",
              transitionDuration: "200ms",
              ":hover": { backgroundColor: "#0F1015", color: "#a353fa" },
              color: value === 4 ? "white" : "#b876ff",
            }}
          >
            Analytics
          </Tab>
          {/* <Tab
            label="Google Analytics"
            value={5}
            variant={value === 5 ? "solid" : "plain"}
            color={value === 5 ? "info" : "info"}
            sx={{
              fontSize: isMobile ? "16px" : "22px",
              transitionDuration: "200ms",
              ":hover": { backgroundColor: "#0F1015", color: "#a353fa" },
              color: value === 5 ? "white" : "#b876ff",
            }}
          >
            Google Analytics
          </Tab> */}
        </TabList>
        <TabPanel value={1}>
          <div className="p-5 rounded-xl bg-[#222430] ">
            <SyncButton />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.3,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className=" flex justify-center"
            >
              <div
                className="image"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="imginput">
                  <Avatar
                    alt="Remy Sharp"
                    src={profilePic}
                    sx={{ width: "100px", height: "100px" }}
                  />

                  <div className="overlayImage z-10 ">
                    <TbPencilMinus className="" />
                  </div>
                </label>
                <input
                  type="file"
                  id="imginput"
                  accept="image/png,image/jpg,image/jpeg"
                  hidden
                  onChange={(e) => handleImageUpload(e)}
                />
              </div>
            </motion.div>
            <div className=" flex justify-center gap-4 flex-col">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.3,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                ref={ref}
                className="flex justify-start gap-4  mt-8 "
              >
                <TextField
                  id="filled-basic"
                  value={username}
                  onChange={(e) => handleUsernameInputChange(e)}
                  label="Username"
                  variant="filled"
                  placeholder="Choose a Username"
                  required
                  fullWidth
                  color="secondary"
                  sx={{ input: { color: "white" }, label: { color: "gray" } }}
                />
                <TextField
                  id="filled-basic"
                  value={name}
                  onChange={(e) => handleNameInputChange(e)}
                  label="Name"
                  variant="filled"
                  placeholder="Full Name"
                  fullWidth
                  color="secondary"
                  sx={{ input: { color: "white" }, label: { color: "gray" } }}
                />
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.3,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="mt-1"
              >
                <TextField
                  id="filled-basic"
                  value={bio}
                  onChange={(e) => handleBioInputChange(e)}
                  label="Description"
                  variant="filled"
                  placeholder="Description"
                  fullWidth
                  color="secondary"
                  sx={{ input: { color: "white" }, label: { color: "gray" } }}
                />
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.3,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className=" bg-[#6d42b9] duration-300 ease-in-out rounded-xl py-2 px-4 w-fit self-center active:scale-90 active:bg-[#341866] hover:bg-[#482584] "
                onClick={(e) => handleDataSubmit(e)}
              >
                Save
              </motion.button>
            </div>

            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                transition={{
                  delay: 1.1,
                  duration: 0.3,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mt-4 flex-col bg-[#202229] rounded-2xl p-2"
              >
                <h1 className=" self-start m-2 mb-2 p-2">
                  Add Social Profiles
                </h1>

                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"instagram"}
                  link={link}
                  setLink={setLink}
                  pic={Instagram}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"facebook"}
                  link={link}
                  setLink={setLink}
                  pic={Facebook}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"youtube"}
                  link={link}
                  setLink={setLink}
                  pic={Youtube}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"snapchat"}
                  link={link}
                  setLink={setLink}
                  pic={Snapchat}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"gmail"}
                  link={link}
                  setLink={setLink}
                  pic={Gmail}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"linkedin"}
                  link={link}
                  setLink={setLink}
                  pic={Linkedin}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"twitter"}
                  link={link}
                  setLink={setLink}
                  pic={Twitter}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"pinterest"}
                  link={link}
                  setLink={setLink}
                  pic={Pinterest}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"telegram"}
                  link={link}
                  setLink={setLink}
                  pic={Telegram}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"twitch"}
                  link={link}
                  setLink={setLink}
                  pic={Twitch}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"behance"}
                  link={link}
                  setLink={setLink}
                  pic={Behance}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"reddit"}
                  link={link}
                  setLink={setLink}
                  pic={Reddit}
                  setUpdate={setUpdate}
                  update={update}
                />
                <Social
                  setacc={setacc}
                  setOpen={setOpen}
                  social={"web"}
                  link={link}
                  setLink={setLink}
                  pic={Web}
                  setUpdate={setUpdate}
                  update={update}
                />
              </motion.div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={2}>
          <Links
            setLinkModal={setLinkModal}
            settitle={settitle}
            setUrlLink={setUrlLink}
            setLinkImage={setLinkImage}
            linkImage={linkImage}
            setIsEditing={setIsEditing}
          />
        </TabPanel>
        <TabPanel value={3}>
          <Appearence />
        </TabPanel>
        <TabPanel value={4}>
          <Analytics setTabValue={setvalue} />
        </TabPanel>
        {/* <TabPanel value={5}>
          <GoogleAnalyticsComponent />
        </TabPanel> */}
      </Tabs>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            {acc.charAt(0).toUpperCase() + acc.slice(1)}
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            textColor="text.tertiary"
          >
            Enter {acc.charAt(0).toUpperCase() + acc.slice(1)} profile link
            below
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              // console.log(link);
              // console.log(acc);
              // console.log(email);
              handleDispatch(email, link);
              setOpen(false);
              setLink("");
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>URL</FormLabel>
                <Input
                  autoFocus
                  required
                  value={link}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>

              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <Modal
        open={LinkModal}
        onClose={() => {
          setLinkModal(false);
          setUrlLink("");
          settitle("");
          setLinkImage("");
          setIsEditing(false);
        }}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" textColor="text.tertiary">
            Enter Details Below
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (UrlLink && title) {
                handleAddlink(email, UrlLink, title, linkImage);
                setLinkModal(false);
                setIsEditing(false);
              }
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  autoFocus
                  required
                  value={title}
                  onChange={(e) => handleTitleInputChange(e)}
                  disabled={isEditing}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Link</FormLabel>
                <Input
                  required
                  value={UrlLink}
                  onChange={(e) => handleLinkInputChange(e)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Select Background Image</FormLabel>
                <Input
                  type="file"
                  onChange={(e) => handleLinkImageUpload(e)}
                  accept="image/png,image/jpg,image/jpeg,image/gif"
                />
              </FormControl>
              {linkImage?.length === 0 || linkImage === undefined ? null : (
                <div>
                  <Typography
                    id="basic-modal-dialog-title"
                    textColor="text.tertiary"
                  >
                    Preview
                  </Typography>
                  <div className="flex justify-center items-center">
                    <img src={linkImage} alt="" className="h-[200px]" />
                  </div>
                </div>
              )}

              <Button type="submit">{isEditing ? "Update" : "Add"}</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </motion.div>
  );
};

export default forwardRef(Right);
