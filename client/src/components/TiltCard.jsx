import React, { useEffect } from "react";
import { Tilt } from "react-tilt";
import Logo from "./img/logo.png";
import { LuSmartphoneNfc } from "react-icons/lu";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const TiltCard = ({
  setCardOpen,
  cardOpen,
  update,
  handleCardOpen,
  username,
}) => {
  const profileLink = `${process.env.REACT_APP_CLIENT_API}/${username}`;

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <motion.div
        initial={{ y: 0 }} // Initial position on the y-axis
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 2, // Duration of one animation cycle
          repeat: Infinity, // Repeats the animation infinitely
          ease: "easeInOut", // Easing function for smooth motion
        }}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1.1,
            speed: 600,
          }}
          className="bg-gradient-to-tr h-[250px] from-[#38275a] to-black border-2 border-[#4c3970] p-5 rounded-xl sm:w-[400px] w-[80vw] duration-300 flex justify-center items-center relative"
        >
          <img
            src={Logo}
            alt=""
            width={50}
            height={50}
            className="absolute top-1 left-1"
          />
          <LuSmartphoneNfc
            className="absolute top-2 right-2 text-purple-900"
            size={25}
            onClick={() => setCardOpen(!cardOpen)}
          />
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=54-38-87&data=${profileLink}`}
              alt="qr"
              className="md:w-[100px]  md:h-[100px] w-[70px] h-[70px] "
            />
            <p className="text-purple-500 font-[poppins]">@{username}</p>
          </div>
          <p className=" text-purple-900 absolute bottom-1 right-2 ">
            Ownlink &copy;
          </p>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default TiltCard;
