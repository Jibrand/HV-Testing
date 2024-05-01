// Loader.js
import React from "react";
import CustomLoaderSVG from "../img/Spinners.mp4"; // Import your custom SVG file

const Loader = ({ text }) => {
  return (
    <div className="loader-overlay">
      <div className=" flex flex-col justify-center items-center text-center relative">
        <p className="text-2xl text-white  hover-underline">
          <i>{text}</i>
        </p>
        <div>
           <video
              autoPlay
              muted
              loop
              className="h-32 w-32"
            >
              <source src={CustomLoaderSVG} type="video/mp4" />
            </video>
        </div>
      </div>
    </div>
  );
};

export default Loader;
