import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import SocialIcon from "./SocialIcon";
import ScreenLink from "./ScreenLink";
import { useEffect } from "react";
import { getSocials } from "../store/socialSlice";
import { getUsername } from "../store/usernameSlice";
import { getName } from "../store/nameSlice";
import { getBio } from "../store/bioSlice";
import { getLinks } from "../store/linkSlice";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { STATUSES } from "../store/store";
import { motion } from "framer-motion";

const Screen = ({ update }) => {
  const social = useSelector((state) => state.social);
  const username = useSelector((state) => state.username);
  const name = useSelector((state) => state.name);
  const bio = useSelector((state) => state.bio);
  const link = useSelector((state) => state.link);
  const bgVar = useSelector((state) => state.bg.bg);
  const usernameStatus = useSelector((state) => state.username.status);
  const bioStatus = useSelector((state) => state.bio.status);
  const linkStatus = useSelector((state) => state.link.status);
  // console.log(status)

  const [profileStatus, setProfileStatus] = useState(STATUSES.IDLE);

  const [profilePic, setProfilePic] = useState("");
  const [bg, setBg] = useState(
    "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/ozvno1ml5j6pq1qccbxs.jpg"
  );

  // console.log(bgV.ar)
  // console.log(bg)

  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const socials = social.socials;
  const links = link.links;

  useEffect(() => {
    dispatch(getUsername(email));
    dispatch(getSocials(email));
    dispatch(getName(email));
    dispatch(getBio(email));
    dispatch(getLinks(email));

    handleGetBg(email);
    handleGetProfilePic(email);
  }, [bg, bgVar, profilePic, update]);

  const handleGetBg = async (email) => {
    const { data } = await axios.get(
      process.env.REACT_APP_API + `/bg/${email}`
    );
    setBg(data.bg);
  };
  const handleGetProfilePic = async (email) => {
    setProfileStatus(STATUSES.LOADING);
    const { data } = await axios.get(
      process.env.REACT_APP_API + `/profilepic/${email}`
    );
    setProfileStatus(STATUSES.IDLE);
    setProfilePic(data.profilePic);
  };

  const isBg = bg?.includes("http");

  var bgStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
  };
  var gradStyle = {
    backgroundImage: `${bg}`,
    backgroundSize: "cover",
  };

  return (
    <motion.div
      className="screen-bg flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar rounded-[40px] jus "
      style={isBg ? bgStyle : gradStyle}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        delay: 0.5,
      }}
    >
      <div className="flex flex-col text-white gap-1 w-[88%]  p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl  backdrop-blur-[10px]">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.3,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          {profileStatus === STATUSES.LOADING ? (
            <Skeleton circle={true} height={90} width={90} />
          ) : (
            <Avatar
              alt="Remy Sharp"
              src={profilePic}
              sx={{ width: "90px", height: "90px" }}
            />
          )}
        </motion.div>
        {usernameStatus === STATUSES.LOADING ? (
          <Skeleton width={200} height={20} />
        ) : (
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.3,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            {username.username ? `@${username.username}` : null}
          </motion.h2>
        )}
        {bioStatus === STATUSES.LOADING ? (
          <Skeleton height={20} count={2} />
        ) : (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.3,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-2"
          >
            {bio.bio ? `${bio.bio}` : null}{" "}
          </motion.p>
        )}
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 1,
          duration: 0.3,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-white w-[90%] min-h-[80px] overflow-x-scroll no-scrollbar  p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]"
      >
        <motion.div className="flex h-full w-full items-center justify-start mx-auto my-0 px-1">
          {socials?.length !== 0 &&
            socials?.map((item, index) => (
              <SocialIcon icon={item.type} link={item.link} index={index} />
            ))}
        </motion.div>
      </motion.div>

      {/* <div className='text-white w-[90%] min-h-[80px] overflow-x-auto p-1 py-4 mt- rounded-xl bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]'>
        {socials?.length !== 0 ? (
          <div className='flex h-full flex-nowrap items-center justify-start mx-auto my-0 px-1' onClick={updateSocials}>
            {socials.map((item, index) => (
              <SocialIcon key={index} icon={item.type} link={item.link} />
            ))}
          </div>
        ) : (
          <p>Loading social icons...</p>
        )}
      </div> */}

      {links?.length !== 0 && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.3,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-start flex-col text-white gap-1 w-[100%] min-w-[80%] "
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.3,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xl mt-2"
          >
            Links
          </motion.h1>
          {links?.length !== 0 &&
            links?.map((item, index) =>
              linkStatus === STATUSES.LOADING ? (
                <Skeleton
                  width={310}
                  height={180}
                  borderRadius={10}
                  style={{ marginBottom: "10px" }}
                />
              ) : (
                <ScreenLink
                  link={item.link}
                  title={item.title}
                  linkImage={item?.linkImage}
                  index={index}
                />
              )
            )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Screen;
