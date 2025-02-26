import React, { useState } from "react";
import SignupImage from "./img/SignupImage.svg";
import LoginImage from "./img/LoginImage.svg";
import "../../src/App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Register from "./Register";
import { motion } from "framer-motion";

const Authentication = () => {
  const [isNew, setisNew] = useState(false);

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#d6d2db] to-[#c2bccb] min-h-[100vh] w-full">
      <div className="container bg-white/30 flex justify-center items-center h-full  mx-[8%] my-10 rounded-xl lg:rounded-xl p-1 lg:p-0 shadow-xl">
        {isNew ? (
          <Register isNew={isNew} setisNew={setisNew} />
        ) : (
          <Login isNew={isNew} setisNew={setisNew} />
        )}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
          }}
          className=" modal-right lg:flex-[1.3] lg:overflow-y-hidden lg:flex hidden "
        >
          {isNew ? (
            <img className="hero" src={SignupImage} alt="" />
          ) : (
            <img className="hero" src={LoginImage} alt="" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Authentication;
