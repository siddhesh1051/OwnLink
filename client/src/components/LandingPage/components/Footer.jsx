import React from "react";
import Logo from "../img/logo-3d-2.png";
import { motion } from "framer-motion";

const Footer = () => {
  const animationProps = {
    initial: { y: 20, opacity: 0 },
    transition: { delay: 0.1, duration: 0.4 },
    whileInView: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <motion.footer {...animationProps}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-mb-0.5 w-full"
          viewBox="0 0 1367.743 181.155"
        >
          <path
            className="fill-current text-gray-800"
            id="wave"
            data-name="wave"
            d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
            transform="translate(1.743 66.155)"
          ></path>
        </svg>
        <div className="bg-gradient-to-b  from-gray-800 to-transparent pt-1">
          <div className="container m-auto space-y-8 px-6  text-gray-400 md:px-12 lg:px-20">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
              <div className="col-span-8 border-r  border-gray-800 md:col-span-2 lg:col-span-3">
                <div className="flex items-center justify-between gap-6 border-b  border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0">
                  <img
                    src={Logo}
                    alt="Ownlink Logo"
                    width="100"
                    height="42"
                    className="w-32 "
                  />
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/siddhesh1051/OwnLink"
                      target="blank"
                      aria-label="github"
                      className="hover:text-purple-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/siddhesh1051/OwnLink"
                      target="blank"
                      aria-label="twitter"
                      className="hover:text-purple-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/siddhesh1051/OwnLink"
                      target="blank"
                      aria-label="medium"
                      className="hover:text-purple-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-8 md:col-span-6 lg:col-span-5">
                <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                  <div>
                    <h6 className="text-lg font-medium text-gray-200">
                      Company
                    </h6>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Customers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Enterprise
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Partners
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-200">
                      Products
                    </h6>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Customers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Enterprise
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Partners
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-200">
                      Ressources
                    </h6>
                    <ul className="mt-4 list-inside space-y-4">
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Customers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Enterprise
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Partners
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition hover:text-purple-600"
                        >
                          Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between border-t border-gray-800 py-4 pb-8 md:pl-16">
                  <span>
                    &copy; Ownlink {new Date().getFullYear()}{" "}
                    <span id="year"></span>{" "}
                  </span>
                  <span>All right reserved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
