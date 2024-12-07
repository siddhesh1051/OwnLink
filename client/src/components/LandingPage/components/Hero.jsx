import React, { useState } from "react";
import HeroImg from "../img/HeroImg-crop.png";
import Logo from "../img/logo-3d-2.png";
import "../../../index.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import { FaArrowRight, FaUser } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  const animationProps = {
    initial: { y: 30, opacity: 0 },
    transition: { delay: 0.1, duration: 0.6 },
    animate: { y: 0, opacity: 1 },
    once: true,
  };
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <motion.div
      {...animationProps}
      className="md:px-6 md:p-5 rounded-xl bg-[#222430] w-full "
    >
      <header className="p-0 w-full">
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer"
          hidden="true"
          aria-hidden="true"
        />
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

              {/* Hamburger Menu */}
              <label
                htmlFor="hbr"
                className="peer-checked:hamburger block relative z-20 p-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                />
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                />
              </label>

              {/* Rewards Button */}
              <div className="hidden lg:flex">
                <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                  <span>
                    <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                  </span>
                  <span className="backdrop absolute inset-[1px] rounded-full bg-[#1b0130] transition-colors duration-200 group-hover:bg-[#330359]" />
                  <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                    ✨ Introducing Ownlink Rewards
                    <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </span>
                </button>
              </div>

              {/* Nav Menu */}
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border rounded-3xl shadow-2xl shadow-gray-300/20 bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-auto lg:shadow-none border-gray-700 lg:border-0">
                <div className="w-full space-y-2 border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    to="/routes/auth"
                    className="cursor-pointer relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-purple-500">
                      Sign Up
                    </span>
                  </Link>
                  <Link
                    to="/routes/auth"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-neutral-50">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <div className="pt-24 md:py-12 xl:container m-auto px-6 md:px-20">
        {/* Rewards Button */}
        <div className="lg:hidden flex mb-8 justify-center items-center">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-900 transition-colors duration-200 group-hover:bg-neutral-800" />
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
              ✨ Introducing Ownlink Rewards
              <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
        <motion.div {...animationProps}>
          <div
            aria-hidden="true"
            className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-20"
          />
          <div className="relative lg:flex lg:items-center lg:gap-12">
            <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
              <h1 className="font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-white">
                Create a single link for all your social media links with{" "}
                <span className="text-purple-500">Ownlink</span>
              </h1>
              <p className="mt-8 text-gray-300">
                Track views, clicks, and engagement with your Ownlink. Customize
                the appearance and share a QR code to make it easy for others to
                access your link in bio page.
              </p>
              <div>
                <form action="" className="w-full mt-12">
                  <div className="relative flex items-center px-2 p-1 rounded-full bg-gray-900 border border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                    <div className="pl-6 py-3">
                      <FaUser color="white" size={20} />
                    </div>
                    <div className="relative w-full text-lg">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-100 font-medium">
                        ownlink.live/
                      </span>
                      <input
                        autoComplete="text"
                        placeholder="yourname"
                        value={username}
                        onChange={handleInputChange}
                        className="w-full pl-[8.1rem] pr-4 py-4 rounded-full placeholder-gray-400 font-medium focus:outline-none focus:ring-0 focus:placeholder-gray-400 bg-transparent ring-0 text-gray-100"
                        type="text"
                      />
                    </div>
                    <div className="md:pr-1.5 lg:pr-0">
                      <button
                        type="button"
                        title="Get Started"
                        className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                        onClick={() => navigate("/routes/auth")}
                      >
                        <span className="relative hidden w-max text-gray-900 font-semibold md:block">
                          Get Started
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative h-6 w-6 mx-auto text-gray-900 md:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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

export default Hero;
