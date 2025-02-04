import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import Logo from "./img/logo.png";
import { LuSmartphoneNfc } from "react-icons/lu";
import { motion } from "framer-motion";

const TiltCard = ({ setCardOpen, cardOpen, username }) => {
  const profileLink = `${process.env.REACT_APP_CLIENT_API}/${username}`;
  const [loading, setLoading] = useState(true);

  console.log(
    `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${profileLink}&bgcolor=56-39-90&color=240-216-255`
  );

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
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${profileLink}&bgcolor=56-39-90&color=240-216-255`}
              alt="qr"
              className={`md:w-[90px] md:h-[90px] w-[90px] h-[90px] 
              `}
            />
            <p className={`text-purple-500 font-[poppins] `}>@{username}</p>
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
