import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

const Features = () => {
  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <div className="md:px-12 px-2">
      <div className="py-16">
        <div className="xl:container m-auto space-y-12 px-2 md:px-12 lg:px-20">
          <motion.div {...animationProps}>
            <h2 className="mt-4 text-center text-2xl font-bold text-white md:text-4xl">
              Elevate Your Presence with Ownlink
            </h2>
          </motion.div>
          <div className="mt-16 grid gap-8 sm:w-2/3 sm:mx-auto md:w-full md:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            <motion.div
              {...animationProps}
              className="p-8 py-12 sm:p-12 rounded-3xl bg-gray-800 border border-gray-700 shadow-none bg-opacity-50"
            >
              <div className="space-y-12 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341069.png"
                  className="w-16 mx-auto"
                  width={512}
                  height={512}
                  alt="First Feature Icon"
                />
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold transition text-white">
                    Create a Unified Link
                  </h3>
                  <p className="text-gray-300">
                    Gather all your social media profiles and important links in
                    one place for easy access. With Ownlink, you can create a
                    single, shareable link that simplifies your online presence.{" "}
                  </p>
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
            <motion.div
              {...animationProps}
              className="p-8 py-12 sm:p-12 rounded-3xl bg-gray-800 border border-gray-700 shadow-none bg-opacity-50"
            >
              <div className="space-y-12 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341146.png"
                  className="w-16 mx-auto"
                  width={512}
                  height={512}
                  alt="Second Feature Icon"
                />
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white transition">
                    Customize Appearance
                  </h3>
                  <p className="text-gray-300">
                    Tailor the look and feel of your Ownlink to match your
                    personal style. Choose from various customization options
                    and make your Ownlink page uniquely yours.{" "}
                  </p>
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
            <motion.div
              {...animationProps}
              className="p-8 py-12 sm:p-12 rounded-3xl bg-gray-800 border border-gray-700 shadow-none bg-opacity-50"
            >
              <div className="space-y-12 text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4341/4341152.png"
                  className="w-16 mx-auto"
                  width={512}
                  height={512}
                  alt="Third Feature Icon"
                />
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white transition">
                    Track Engagement
                  </h3>
                  <p className="text-gray-300">
                    Monitor views and clicks on your Ownlink to see the impact
                    of your online presence. Understand your audience better and
                    make data-driven decisions.{" "}
                  </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
