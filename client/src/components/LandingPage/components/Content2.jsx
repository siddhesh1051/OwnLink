import React from 'react'
import SocialMockup from '../img/raw/social-media.jpeg'

const Content2 = () => {
  return (
    <div>
      
      <div className="py-16">
  <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
      <div className="md:5/12 lg:w-1/2 mr-8">
        <img
          src={SocialMockup}
          alt="image"
          loading="lazy"
          className='rounded-[2rem] w-full h-full mr-0 md:p-1 scale-95'
        />
      </div>
      <div className="md:7/12 lg:w-1/2 text-start ">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Nuxt development is carried out by passionate developers
        </h2>
        <p className="my-8 text-gray-600 dark:text-gray-300">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
        </p>

        <a
            href="https://tailus.io/contact"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
          >
            <span
              className="relative text-base font-semibold text-sky-600 dark:text-white">Browse now</span>
        </a>
      </div>
    </div>
  </div>
</div>
                                    
    </div>
  )
}

export default Content2
