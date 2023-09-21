/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      boxShadow: {
        '3xl' : '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    },
    colors: {
      primaryLight: '#8536D1',
      secondaryLight: '#A855F7',

    },
    backgroundColor: {
      'sky-100': '#A855F7', // Define your custom color here
    },

      
      
      
    },
  },
  plugins: [],
}