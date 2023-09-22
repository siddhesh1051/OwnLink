import React from 'react'

const CTA = () => {
  return (
    <div>
<div className="py-16">
  <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
    <div className="flex items-center justify-center -space-x-2">
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=boy1"
        alt="member photo"
        className="h-8 w-8 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=boy2"
        alt="member photo"
        className="h-12 w-12 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://xsgames.co/randomusers/avatar.php?g=female&format=svg&name=girl1"
        alt="member photo"
        className="z-10 h-16 w-16 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=boy3"
        alt="member photo"
        className="relative h-12 w-12 rounded-full object-cover"
      />
      <img
        loading="lazy"
        width={220}
        height={220}
        src="https://xsgames.co/randomusers/avatar.php?g=male&format=svg&name=boy4"
        alt="member photo"
        className="h-8 w-8 rounded-full object-cover"
      />
    </div>
    <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
      <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
        Get Started now
      </h1>
      <p className="text-center text-xl text-gray-600 dark:text-gray-300">
        Be part of millions people around the world using tailus in modern User
        Interfaces.
      </p>
      <div className="flex flex-wrap justify-center gap-6 ">
        <a
          href="#"
          className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max  dark:bg-primaryLight rounded-full hover:scale-105 active:scale-95 duration-200"
        >
          <span className="relative text-base font-semibold text-white dark:text-dark">
            Get Started
          </span>
        </a>
        <a
          href="#"
          className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
        >
          <span className="relative text-base font-semibold text-primary dark:text-white">
            More about
          </span>
        </a>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default CTA
