"use client";

import React from "react";

const HeroBanner = ({ className = "", style }) => {
  return (
    <section
      className={`w-full px-2 font-brokmannlight relative ${className}`}
      style={style}
    >
      <div className="h-[560px] sm:h-[620px] md:h-[650px] text-center rounded-[15px] w-full overflow-hidden relative flex flex-col justify-center items-center bg-black px-4">
        <span className="text-white uppercase text-[11px] sm:text-[13px] md:text-[15px] relative z-10 tracking-[0.08em]">
          FULL STACK DEVELOPER Based in nashik
        </span>

        <h1 className="text-white capitalize text-[34px] leading-[1.1] sm:text-[42px] md:text-[50px] lg:text-[57px] my-4 md:my-5 relative z-10">
          scalable <span className="text-[#dc7550]">web & mobile</span> products
          Service
        </h1>
        <p className="text-white text-[13px] sm:text-[14px] md:text-[15px] max-w-[740px] relative z-10">
          Providing best website designing services and web development services
          focused on performance, scalability, and modern user experience.
        </p>

        <a target="_blank"
          href="https://calendly.com/dhirajbhirud2699/30min?month=2026-02"
          className="bg-[#dc7550] font-bold text-[#ffffff] text-[15px] sm:text-[17px] md:text-[19px] py-3 md:py-4 px-5 md:px-6 mt-8 md:mt-10 rounded-[50px] relative z-10 gettingstarted"
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
