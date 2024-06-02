import React, { useRef, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import { LuArrowUp } from "react-icons/lu";
import { motion } from "framer-motion";

const Home = () => {
  const [update, setUpdate] = useState(false);

  const ref = useRef(null);
  const previewRef = useRef(null);
  const handleCustomize = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlePreview = () => {
    previewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-2 w-full h-full bg-[#161a23] text-white">
        <Left
          handleCustomize={handleCustomize}
          ref={previewRef}
          update={update}
          setUpdate={setUpdate}
        />
        <Right ref={ref} update={update} setUpdate={setUpdate} />
        <a
          className="fixed bottom-0 left-0 ml-3 mb-1 z-10"
          href="https://www.producthunt.com/posts/ownlink?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ownlink"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=424686&theme=light"
            alt="OwnLink - Single&#0032;link&#0032;for&#0032;all&#0032;your&#0032;social&#0032;media&#0032;links&#0032;with&#0032;Ownlink | Product Hunt"
            style={{ width: "150px", height: "54px" }}
            width="150"
            height="54"
          />
        </a>
      </div>

      <div
        className="lg:hidden fixed right-3 bottom-3 flex justify-center items-center bg-[#3c3c44] rounded-full px-5 py-3 text-lg text-white shadow-[-4.0px_-8.0px_24.0px_rgba(0,0,0,0.68)]  active:scale-95 duration-150"
        onClick={handlePreview}
      >
        Preview <LuArrowUp className="ml-1 text-xl" />
      </div>
    </>
  );
};

export default Home;
