/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      boxShadow: {
        '3xl' : '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    }
    },
  },
  plugins: [],
}