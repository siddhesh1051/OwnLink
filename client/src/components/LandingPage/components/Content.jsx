import React from "react";
import AnalyticsMockup from "../img/raw/Analytics.jpeg";
import { motion } from "framer-motion";

const Content = () => {
  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <motion.div {...animationProps} className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div className="lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div className="md:5/12 lg:w-1/2 ml-8">
              <img
                src={AnalyticsMockup}
                alt="image"
                loading="lazy"
                className="rounded-[2rem] w-full h-full mr-0 md:p-1 scale-95"
              />
            </div>
            <div className="md:7/12 lg:w-1/2">
              <h2 className="text-3xl font-bold  md:text-4xl text-white">
                Unlock Valuable Insights
              </h2>
              <p className="my-8 text-gray-300">
                With Ownlink's built-in analytics, you can track the performance
                of your link-in-bio page like never before. Monitor views and
                clicks on your social media profiles and links, allowing you to
                gain valuable insights into your audience's engagement.
              </p>
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010-1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-indigo-300">
                    Monitor Views
                  </h4>
                  <p className="text-gray-400">
                    Keep track of how many views your link-in-bio page receives.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-5/6">
                  <h4 className="font-semibold text-lg text-teal-300">
                    Track CTR
                  </h4>
                  <p className="text-gray-400">
                    Measure the Click-Through Rate (CTR) to understand
                    engagement and optimize your digital strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
