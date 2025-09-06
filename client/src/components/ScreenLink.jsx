import React, { useEffect } from "react";
import defaultBg from "./img/defaultBg.jpg";
import "../../src/App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUsername } from "../store/usernameSlice";

const ScreenLink = ({ link, title, linkImage, index, buttonShape, fontFamily }) => {
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const username = useSelector((state) => state.username.username);
  const path = window.location.pathname;

  const getBg = (linkImage) => {
    if (linkImage === undefined || linkImage === "") return defaultBg;
    else return linkImage;
  };

  useEffect(() => {
    dispatch(getUsername(email));
  }, []);

  const increaseLinkViews = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API + `/increaseLinksViews/${username}`,
        {
          title: title,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const trackLinkClick = async () => {
    path === "/"
      ? console.log("Click not counted as you are on dashboard")
      : increaseLinkViews();
  };

  return (
    <div
      className={`flex text-white mt-2 w-[87%] min-w-[80%] ${buttonShape || 'rounded-xl'} aspect-video relative cursor-pointer min-h-[150px]`}
    >
      <div className="aspect-video relative">
        <a
          href={link}
          target="_blank"
          className="place-self-center"
          onClick={trackLinkClick}
        >
          <img src={getBg(linkImage)} className={`h-full w-full ${buttonShape || 'rounded-xl'}`} />
          <div
            className="overlay-link"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 90%)",
            }}
          >
            <p className="ml-4" style={{ fontFamily: fontFamily || 'Inter, sans-serif' }}>{title}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ScreenLink;
