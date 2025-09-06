/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      },
      colors: {
        primaryLight: "#8536D1",
        secondaryLight: "#A855F7",
        darker: "#090E1A",
      },
      backgroundColor: {
        "sky-100": "#A855F7", // Define your custom color here
        darker: "#090E1A",
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'sourcesans': ['Source Sans Pro', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },

      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },

      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
