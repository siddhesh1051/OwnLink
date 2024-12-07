import React from "react";
import { motion } from "framer-motion";

const StepComponent = ({
  isImageLeft,
  title,
  description,
  isDownloadButton,
  heroImage,
  stepNumber,
  handleApkDownload,
}) => {
  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <motion.div {...animationProps} className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div
            className={`lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex ${
              isImageLeft ? "flex-row" : "flex-row-reverse"
            } md:gap-6 justify-center md:space-y-0 lg:items-center`}
          >
            <div className="md:5/12 lg:w-1/2 mr-8">
              <img
                src={heroImage}
                alt="image"
                loading="lazy"
                className="rounded-[2rem] w-full h-full mr-0 md:p-1 scale-95"
              />
            </div>
            <div className="md:7/12 lg:w-1/2 text-start">
              <h3 className="text-2xl font-bold md:text-2xl text-purple-300">
                Step {stepNumber}
              </h3>
              <h2 className="text-3xl font-bold md:text-4xl text-white my-4">
                {title}
              </h2>
              <p className="my-8 text-gray-300">{description}</p>
              {isDownloadButton && (
                <button
                  onClick={handleApkDownload}
                  className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full  before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-violet-200 before:bg-primaryLight/30 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Download Now
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepComponent;
