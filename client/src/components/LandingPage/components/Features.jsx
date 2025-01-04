import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuPlay, LuX } from "react-icons/lu";
import WebThumbnail from "../img/WebThumbnail.png";

const FeatureCard = ({ icon, title, description }) => {
  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      {...animationProps}
      className="p-8 py-12 sm:p-12 rounded-3xl bg-gray-800 border border-gray-700 shadow-none bg-opacity-50"
    >
      <div className="space-y-12 text-center">
        <img
          src={icon}
          className="w-16 mx-auto"
          width={512}
          height={512}
          alt={`${title} Icon`}
        />
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white transition">
            {title}
          </h3>
          <p className="text-gray-300">{description}</p>
          <Link
            to="/routes/auth"
            className="group relative flex mx-auto h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:bg-gray-800 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative w-5 h-5 text-white transition duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <LuX className="w-8 h-8" />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4341/4341069.png",
      title: "Create a Unified Link",
      description:
        "Gather all your social media profiles and important links in one place for easy access. With Ownlink, you can create a single, shareable link that simplifies your online presence.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4341/4341146.png",
      title: "Customize Appearance",
      description:
        "Tailor the look and feel of your Ownlink to match your personal style. Choose from various customization options and make your Ownlink page uniquely yours.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4341/4341152.png",
      title: "Track Engagement",
      description:
        "Monitor views and clicks on your Ownlink to see the impact of your online presence. Understand your audience better and make data-driven decisions.",
    },
  ];

  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <div className="md:px-12 px-2">
      <div className="py-16">
        {/* Hero Video Section */}
        <div
          className="relative flex justify-center px-48 pt-0 mb-24 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="relative w-full overflow-hidden rounded-xl">
            <div className="relative group">
              <img
                src={WebThumbnail}
                width={1920}
                height={1080}
                alt="Feature Preview"
                className="w-full transition-all duration-300 group-hover:blur-sm border border-primaryLight/30 rounded-xl"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="relative group">
                    {/* Outer circle - blur effect */}
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300" />

                    {/* Middle circle */}
                    <div className="relative w-24 h-24 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full transform transition-transform duration-300 group-hover:scale-110">
                      {/* Inner circle with gradient */}
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-b from-primaryLight/80 to-blue-600/50 transform transition-transform duration-300 group-hover:scale-105">
                        <LuPlay className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoId="7cfNgqLXggs"
        />

        {/* Features Section */}
        <div className="xl:container m-auto space-y-12 px-2 md:px-12 lg:px-20">
          <motion.div {...animationProps}>
            <h2 className="mt-4 text-center text-2xl font-bold text-white md:text-4xl">
              Elevate Your Presence with Ownlink
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
