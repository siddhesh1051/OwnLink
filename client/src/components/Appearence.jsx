import React, { useEffect, useState } from "react";
import BgImage from "./bgImage";
import defaultBg from "./img/defaultBg.jpg";
import GradientComp from "./GradientComp";
import SolidColor from "./SolidColor";
import FontSelector from "./FontSelector";
import ButtonShapeSelector from "./ButtonShapeSelector";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getBg } from "../store/bgSlice";
import { getAppearance, setAppearance, setAppearanceLocal } from "../store/appearanceSlice";
import { LuArrowDownRight, LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const Appearence = () => {
  const [selected, setSelected] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();
  const bgVar = useSelector((state) => state.bg?.bg);
  const appearance = useSelector((state) => state.appearance?.appearance);

  useEffect(() => {
    dispatch(getBg(email));
    dispatch(getAppearance(email));
  }, []);

  useEffect(() => {
    if (appearance) {
      setSelectedFont(appearance.font || "Inter");
      setSelectedShape(appearance.buttonShape || "rounded");
    }
  }, [appearance]);

  const handleSelect = async (e, bg) => {
    e.preventDefault();

    // Immediately update the background in Redux store
    dispatch({
      type: "bg/setBg",
      payload: bg,
    });

    setSelected(bg);

    // Save in background
    try {
      await axios.post(process.env.REACT_APP_API + `/addbg`, {
        email,
        bg: bg,
      });
      toast.success("Background Image Changed");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong !!");
    }
  };

  const handleSelectGradient = async (e, gradColors) => {
    e.preventDefault();

    // Immediately update the background in Redux store
    dispatch({
      type: "bg/setBg",
      payload: gradColors,
    });

    setSelected(gradColors);

    // Save in background
    try {
      await axios.post(process.env.REACT_APP_API + `/addbg`, {
        email,
        bg: gradColors,
      });
      toast.success("Background Image Changed");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong !!");
    }
  };

  const handleBgupload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ownlink");

    try {
      // Start upload
      toast.loading("Uploading image...");

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dvdox1fzz/image/upload",
        formData
      );

      const imageUrl = uploadRes.data.secure_url;

      // Immediately update background
      dispatch({
        type: "bg/setBg",
        payload: imageUrl,
      });
      setSelected(imageUrl);

      // Save in backend
      await axios.post(process.env.REACT_APP_API + `/addbg`, {
        email,
        bg: imageUrl,
      });

      toast.dismiss();
      toast.success("Background Image Changed");
    } catch (err) {
      console.log(err);
      toast.dismiss();
      toast.error("Something Went Wrong !!");
    }
  };

  const handleFontSelect = async (e, font) => {
    e.preventDefault();
    setSelectedFont(font);
    
    // Immediately update the local Redux state
    dispatch(setAppearanceLocal({ font }));
    
    try {
      await dispatch(setAppearance({ 
        email, 
        appearance: { 
          ...appearance,
          font 
        } 
      })).unwrap();
      toast.success("Font Changed Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong !!");
      // Revert the local state if server update fails
      dispatch(setAppearanceLocal({ font: appearance?.font || "Inter" }));
    }
  };

  const handleShapeSelect = async (e, shape) => {
    e.preventDefault();
    setSelectedShape(shape);
    
    // Immediately update the local Redux state
    dispatch(setAppearanceLocal({ buttonShape: shape }));
    
    try {
      await dispatch(setAppearance({ 
        email, 
        appearance: { 
          ...appearance,
          buttonShape: shape 
        } 
      })).unwrap();
      toast.success("Button Shape Changed Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong !!");
      // Revert the local state if server update fails
      dispatch(setAppearanceLocal({ buttonShape: appearance?.buttonShape || "rounded" }));
    }
  };

  const backgroundimages = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/ozvno1ml5j6pq1qccbxs.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116971/Background%20Images/zrlojuzmf4fqxhrswgui.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116970/Background%20Images/ghvebcokrdjht0lyejk2.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116969/Background%20Images/hmjytjxxt27jjc0fcxxv.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116968/Background%20Images/fajehimpcme88o9ntvxg.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/wl6owfhurk5k402t2oxx.jpg",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/vt5mnuujdkydtwkddzns.jpg",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/dwkfbhkhcozqb0asrmsk.jpg",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116966/Background%20Images/pvq7wyq1x1pol7wsctv4.jpg",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dvdox1fzz/image/upload/v1687116967/Background%20Images/u41ak5wpagkwumtkfevo.jpg",
    },
  ];

  return (
    <div>
      <div className="flex mt-2 justify-center">
        <p className=" font-light text-sm text-gray-400 mb-4 ">
          {" "}
          Choose a background image
        </p>
      </div>
      <div className="flex gap-5 flex-wrap  justify-center">
        <label htmlFor="bginput">
          <motion.div
            initial={{ opacity: 0 }}
            // animate={{  y: 0,opacity:1 }}
            transition={{
              delay: 0,
              duration: 0.3,
            }}
            //  whileHover={{scale:1.05}}
            //  whileTap={{scale:0.95}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`w-[150px] h-[266px]  cursor-pointer flex justify-center max-w-[160px] min-w-[120px] items-center rounded-[14px] bg-[#333333] p-[16px] border-[transparent] duration-300 ease-in-out transform hover:scale-105 hover:border-[1px] hover:border-white shadow-xl hover:bg-[#4040w40]  `}
          >
            Upload Image
          </motion.div>
        </label>

        <input
          type="file"
          id="bginput"
          hidden
          onChange={(e) => {
            handleBgupload(e);
          }}
        />

        {backgroundimages.map((item, index) => (
          <BgImage
            key={item.id}
            bg={item.image}
            setSelected={setSelected}
            selected={selected}
            handleSelect={handleSelect}
            index={index}
          />
        ))}
        <a
          className="flex justify-center items-center duration-200 cursor-pointer text-violet-400 mx-3"
          href="https://www.setaswall.com/1080x1920-wallpapers"
          rel="noopener noreferrer"
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.3,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="duration-200 cursor-pointer mr-1 hover:mr-3 flex justify-center items-center"
          >
            View More
          </motion.div>
          <LuArrowRight className="inline text-xl hover:ml-2 duration-200" />
        </a>
      </div>

      <div className="flex mt-2 justify-center">
        <p className="font-light text-sm text-gray-400 my-4">
          or Choose a Gradient
        </p>
      </div>

      <div className="flex gap-5 flex-wrap justify-center">
        <GradientComp
          gradColors="linear-gradient(to right top, #742399, #1864d9)"
          handleSelectGradient={handleSelectGradient}
          index={1}
        />
        <GradientComp
          gradColors="linear-gradient(to right top, #5e215a, #745635)"
          handleSelectGradient={handleSelectGradient}
          index={2}
        />
        <GradientComp
          gradColors="linear-gradient(to right top, #090a0b, #d2ddff)"
          handleSelectGradient={handleSelectGradient}
          index={3}
        />
        <GradientComp
          gradColors="linear-gradient(to right top, #226b25, #42256d)"
          handleSelectGradient={handleSelectGradient}
          index={4}
        />
      </div>

      <div className="flex mt-2 justify-center">
        <p className="font-light text-sm text-gray-400 my-4">
          or Choose a Solid Colour
        </p>
      </div>

      <div className="flex gap-5 flex-wrap justify-center">
        <SolidColor
          gradColors="linear-gradient(to right top, #DF531D, #DF531D)"
          handleSelectGradient={handleSelectGradient}
          index={1}
        />
        <SolidColor
          gradColors="linear-gradient(to right top, #1D831C, #1D831C)"
          handleSelectGradient={handleSelectGradient}
          index={2}
        />
        <SolidColor
          gradColors="linear-gradient(to right top, #B64294, #B64294)"
          handleSelectGradient={handleSelectGradient}
          index={3}
        />
        <SolidColor
          gradColors="linear-gradient(to right top, #3C3AB1, #3C3AB1)"
          handleSelectGradient={handleSelectGradient}
          index={4}
        />
      </div>

      <div className="flex mt-8 justify-center">
        <p className="font-light text-sm text-gray-400 my-4">
          Choose a Font
        </p>
      </div>

      <FontSelector
        selectedFont={selectedFont}
        handleFontSelect={handleFontSelect}
        index={1}
      />

      <div className="flex mt-8 justify-center">
        <p className="font-light text-sm text-gray-400 my-4">
          Choose Button Shape
        </p>
      </div>

      <ButtonShapeSelector
        selectedShape={selectedShape}
        handleShapeSelect={handleShapeSelect}
        index={1}
      />
    </div>
  );
};

export default Appearence;
