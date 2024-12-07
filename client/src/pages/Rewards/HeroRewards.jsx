import React from "react";
import HeroImg from "./assets/hero.webp";
import Logo from "../../components/LandingPage/img/logo-3d-2.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const HeroRewards = ({ handleApkDownload }) => {
  const animationProps = {
    initial: { y: 30, opacity: 0 },
    transition: { delay: 0.1, duration: 0.6 },
    animate: { y: 0, opacity: 1 },
    once: true,
  };

  return (
    <motion.div
      {...animationProps}
      className="md:px-6 md:p-5 rounded-xl bg-[#222430] w-full "
    >
      <header className="p-0 w-full">
        <nav className="fixed z-20 w-full bg-black/40 text-white backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap items-center gap-6 md:py-3 md:gap-0 justify-between">
              {/* Logo Section */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <img src={Logo} alt="logo" className="w-12 h-12 rounded-lg" />
                  <span className="text-xl font-bold text-primary tracking-wide">
                    Ownlink
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <div className="pt-24 md:py-12 xl:container m-auto px-6 md:px-20">
        <motion.div {...animationProps}>
          <div
            aria-hidden="true"
            className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-20"
          />
          <div className="relative lg:flex lg:flex-row-reverse lg:items-center lg:gap-12">
            <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
              <h1 className="font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-white">
                Get Rewarded for promoting your favorite creators{" "}
              </h1>

              <button
                type="button"
                title="Download"
                className="px-12 py-3 rounded-full bg-gradient-to-b from-purple-500 to-purple-600 text-white focus:ring-2 border border-purple-400 hover:border-purple-300 focus:ring-purple-400 hover:shadow-xl transition duration-200 mt-6"
                // className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 mt-6 sm:mt-8 rounded-lg bg-gradient-to-r from-primaryLight to-secondaryLight text-white font-semibold text-lg px-4 py-2"
                onClick={handleApkDownload}
              >
                <span className="relative w-max text-gray-100 font-semibold block">
                  Download App <FaDownload className="inline" />
                </span>
              </button>
            </div>
            <div className="w-full lg:w-7/12 lg:-mr-16">
              <img
                src={HeroImg}
                alt="project illustration"
                className="w-full h-108 rounded-2xl h-full mr-0 md:p-1 scale-95"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroRewards;
