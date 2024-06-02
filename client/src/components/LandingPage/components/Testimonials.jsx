import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };
  return (
    <motion.div {...animationProps} className="md:px-16 px-2">
      <div className="py-16">
        <div className="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <div className="mb-20 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              We have some fans.
            </h2>
          </div>
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=John+Doe"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    Eric Ampire
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p className="mt-8">
                I have been using this product for a while now, and I must say
                it has exceeded my expectations. The ease of use and
                functionality are top-notch. It has greatly improved my workflow
                and productivity. The customer support is also outstanding,
                always ready to assist with any questions or issues. I highly
                recommend this product to anyone looking to streamline their
                work processes and enhance their productivity.
              </p>
            </div>
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=fdgf"
                  alt=""
                  width=""
                  height=""
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    Rodrigo Aguilar
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Creator of Tailwind Awesome
                  </p>
                </div>
              </div>
              <p className="mt-8">
                {" "}
                Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=female&format=svg&name=lily"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    Adam Wathan
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Creator of Tailwindcss
                  </p>
                </div>
              </div>
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=John"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    Dan Kyungu
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=Clotilde+Magny"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    John Doe
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Creator dev
                  </p>
                </div>
              </div>
              <p className="mt-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=Leslie+Burnard"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    Randy Doe
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
