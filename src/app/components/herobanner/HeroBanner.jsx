"use client";

import React from "react";

const HeroBanner = ({ className = "", style }) => {
  return (
    <section
      className={`w-full px-2 font-brokmannlight relative ${className}`}
      style={style}
    >
      <div className="h-[650px] rounded-[15px] w-full overflow-hidden relative flex flex-col justify-center items-center bg-black">
        <span className="text-white uppercase text-[15px] relative z-10">
          FULL STACK DEVELOPER Based in nashik
        </span>

        <h1 className="text-white capitalize text-[57px] my-5 relative z-10">
          scalable <span className="text-[#dc7550]">web & mobile</span> products
          Service
        </h1>
        <p className="text-white text-[15px] relative z-10">
          Providing best website designing services and web development services
          focused on performance, scalability, and modern user experience.
        </p>

        <a
          href=""
          className="bg-[#dc7550] font-bold text-[#ffffff] text-[19px] py-4 px-6 mt-10 rounded-[50px] relative z-10 gettingstarted"
        >
          <span>Tell us about your project</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
            <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"></polygon>
            <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5"></polygon>
            <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5"></polygon>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
