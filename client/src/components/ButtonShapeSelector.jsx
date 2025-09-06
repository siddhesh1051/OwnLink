import React from "react";
import { motion } from "framer-motion";

const ButtonShapeSelector = ({ selectedShape, handleShapeSelect, index }) => {
  const shapes = [
    { 
      name: "rounded", 
      display: "Rounded", 
      class: "rounded-xl",
      preview: "rounded-xl"
    },
    { 
      name: "square", 
      display: "Square", 
      class: "rounded-none",
      preview: "rounded-none"
    },
    { 
      name: "pill", 
      display: "Pill", 
      class: "rounded-full",
      preview: "rounded-full"
    },
    { 
      name: "soft", 
      display: "Soft", 
      class: "rounded-lg",
      preview: "rounded-lg"
    },
    { 
      name: "sharp", 
      display: "Sharp", 
      class: "rounded-sm",
      preview: "rounded-sm"
    },
    { 
      name: "extra-rounded", 
      display: "Extra Rounded", 
      class: "rounded-3xl",
      preview: "rounded-3xl"
    },
  ];

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {shapes.map((shape, shapeIndex) => (
        <motion.div
          key={shape.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: shapeIndex * 0.1,
            duration: 0.3,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-[120px] h-[80px] cursor-pointer flex flex-col justify-center items-center rounded-[12px] p-[12px] border-2 duration-300 ease-in-out transform ${
            selectedShape === shape.name
              ? "border-violet-500 bg-violet-500/20 shadow-lg"
              : "border-[#333333] bg-[#333333] hover:border-violet-400 hover:bg-[#404040]"
          }`}
          onClick={(e) => handleShapeSelect(e, shape.name)}
        >
          <div className="text-center">
            <div 
              className={`w-12 h-6 bg-violet-400 mb-2 mx-auto ${shape.preview}`}
            />
            <p className="text-white text-xs font-medium">
              {shape.display}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ButtonShapeSelector;