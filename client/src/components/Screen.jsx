import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import SocialIcon from "./SocialIcon";
import ScreenLink from "./ScreenLink";
import { getSocials } from "../store/socialSlice";
import { getUsername } from "../store/usernameSlice";
import { getName } from "../store/nameSlice";
import { getBio } from "../store/bioSlice";
import { getLinks } from "../store/linkSlice";
import { getAppearance } from "../store/appearanceSlice";
import { getFontClass, getButtonShapeClass, getFontFamily } from "../utils/appearanceUtils";
import axios from "axios";

const Screen = ({ update }) => {
  const social = useSelector((state) => state.social);
  const username = useSelector((state) => state.username);
  const name = useSelector((state) => state.name);
  const bio = useSelector((state) => state.bio);
  const link = useSelector((state) => state.link);
  const bgVar = useSelector((state) => state.bg.bg);
  const appearance = useSelector((state) => state.appearance?.appearance);

  const [profilePic, setProfilePic] = useState("");
  const [bg, setBg] = useState(null);

  const dispatch = useDispatch();
  const email = localStorage.getItem("email");

  const socials = social.socials;
  const links = link.links;
  
  const fontClass = getFontClass(appearance?.font || "Inter");
  const buttonShapeClass = getButtonShapeClass(appearance?.buttonShape || "rounded");
  const fontFamily = getFontFamily(appearance?.font || "Inter");

  useEffect(() => {
    const initBackground = async () => {
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_API + `/bg/${email}`
        );
        setBg(data.bg);
        dispatch({
          type: "bg/setBg",
          payload: data.bg,
        });
      } catch (err) {
        console.error("Error loading background:", err);
        setBg(
          "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/ozvno1ml5j6pq1qccbxs.jpg"
        );
      }
    };

    initBackground();
  }, []);

  useEffect(() => {
    if (bgVar) {
      setBg(bgVar);
    }
  }, [bgVar]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUsername(email));
      dispatch(getSocials(email));
      dispatch(getName(email));
      dispatch(getBio(email));
      dispatch(getLinks(email));
      dispatch(getAppearance(email));

      try {
        const { data } = await axios.get(
          process.env.REACT_APP_API + `/profilepic/${email}`
        );
        setProfilePic(data.profilePic);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [update]);

  const isBg = bg?.includes("http");

  const bgStyle = {
    backgroundImage: bg ? `url(${bg})` : "none",
    backgroundSize: "cover",
  };

  const gradStyle = {
    backgroundImage: bg || "none",
    backgroundSize: "cover",
  };

  if (!bg) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`screen-bg flex justify-start items-center w-full h-full flex-col gap-2 overflow-scroll no-scrollbar rounded-[40px] jus ${fontClass}`}
      style={{
        ...(isBg ? bgStyle : gradStyle),
        fontFamily: fontFamily
      }}
    >
      <div className={`flex flex-col text-white gap-1 w-[88%] p-3 py-6 mt-16 rounded-tl-[60px] rounded-tr-[60px] ${buttonShapeClass} bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]`}>
        <div className="flex justify-center items-center">
          <Avatar
            alt="Remy Sharp"
            src={profilePic}
            sx={{ width: "90px", height: "90px" }}
          />
        </div>

        <h2 style={{ fontFamily: fontFamily }}>{username.username ? `@${username.username}` : null}</h2>
        <p className="mt-2" style={{ fontFamily: fontFamily }}>{bio.bio ? `${bio.bio}` : null}</p>
      </div>

      <div className={`text-white w-[90%] min-h-[80px] overflow-x-scroll no-scrollbar p-1 py-4 mt- ${buttonShapeClass} bg-gray-50 bg-opacity-10 shadow-3xl backdrop-blur-[10px]`}>
        <div className="flex h-full w-full items-center justify-start mx-auto my-0 px-1">
          {socials?.length !== 0 &&
            socials?.map((item, index) => (
              <SocialIcon
                key={index}
                icon={item.type}
                link={item.link}
                index={index}
              />
            ))}
        </div>
      </div>

      {links?.length !== 0 && (
        <div className="flex items-center justify-start flex-col text-white gap-1 w-[100%] min-w-[80%]">
          <h1 className="text-center text-xl mt-2" style={{ fontFamily: fontFamily }}>Links</h1>
          {links?.map((item, index) => (
            <ScreenLink
              key={index}
              link={item.link}
              title={item.title}
              linkImage={item?.linkImage}
              index={index}
              buttonShape={buttonShapeClass}
              fontFamily={fontFamily}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Screen;
