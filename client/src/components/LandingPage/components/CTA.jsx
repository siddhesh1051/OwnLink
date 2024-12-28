import React from "react";
import { Link } from "react-router-dom";

const CTA = () => (
  <div className="py-16">
    <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
      <h1 className="text-center text-4xl font-bold text-white md:text-5xl">
        Unify Your Digital Footprint with Ownlink
      </h1>
      <p className="text-center text-xl text-gray-300">
        Simplify your social media presence with a single link for all profiles,
        tracking, and more.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          to="/routes/auth"
          className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max bg-primaryLight rounded-full hover:scale-105 active:scale-95 duration-200"
        >
          <span className="relative text-base font-semibold text-white">
            Get Started
          </span>
        </Link>
        <Link
          to="/routes/auth"
          className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 before:border-gray-700 hover:scale-105 duration-200 before:bg-gray-800 sm:w-max"
        >
          <span className="relative text-base font-semibold text-gray-300">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default CTA;
