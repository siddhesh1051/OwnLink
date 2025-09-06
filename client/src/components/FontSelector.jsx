import React from "react";
import { motion } from "framer-motion";

const FontSelector = ({ selectedFont, handleFontSelect, index }) => {
  const fonts = [
    { name: "Inter", display: "Inter", class: "font-sans" },
    { name: "Roboto", display: "Roboto", class: "font-roboto" },
    { name: "Poppins", display: "Poppins", class: "font-poppins" },
    { name: "Montserrat", display: "Montserrat", class: "font-montserrat" },
    { name: "Open Sans", display: "Open Sans", class: "font-opensans" },
    { name: "Lato", display: "Lato", class: "font-lato" },
    { name: "Nunito", display: "Nunito", class: "font-nunito" },
    { name: "Source Sans Pro", display: "Source Sans Pro", class: "font-sourcesans" },
    { name: "Raleway", display: "Raleway", class: "font-raleway" },
    { name: "Playfair Display", display: "Playfair Display", class: "font-playfair" },
    { name: "Oswald", display: "Oswald", class: "font-oswald" },
    { name: "Merriweather", display: "Merriweather", class: "font-merriweather" },
  ];

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {fonts.map((font, fontIndex) => (
        <motion.div
          key={font.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: fontIndex * 0.1,
            duration: 0.3,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-[140px] h-[80px] cursor-pointer flex justify-center items-center rounded-[12px] p-[12px] border-2 duration-300 ease-in-out transform ${
            selectedFont === font.name
              ? "border-violet-500 bg-violet-500/20 shadow-lg"
              : "border-[#333333] bg-[#333333] hover:border-violet-400 hover:bg-[#404040]"
          }`}
          onClick={(e) => handleFontSelect(e, font.name)}
        >
          <div className="text-center">
            <p
              className={`text-white text-sm font-medium mb-1`}
              style={{ fontFamily: font.display }}
            >
              {font.display}
            </p>
            <p className="text-xs text-gray-400">Aa</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FontSelector;