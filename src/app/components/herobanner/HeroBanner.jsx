import React from "react";

const HeroBanner = () => {
  return (
    <section className="w-full px-2 font-brokmannlight  relative ">
      <div className="h-[650px] rounded-[15px] w-full bg-hero flex flex-col justify-center items-center">
        <span className="text-white uppercase text-[15px] ">
          FULL STACK DEVELOPER Based in nashik
        </span>

        <h1 className="text-white capitalize text-[57px]  my-5">
          scalable <span className="text-[#fccd03]">web & mobile</span> products
          Service
        </h1>
        <p className="text-white text-[15px]">
          Providing best website designing services and web development services
          focused on performance, scalability, and modern user experience.
        </p>

        <a href="" className="bg-[#fccd03] font-bold text-[#2e2e2e] text-[16px] py-4 px-6 mt-10 rounded-[50px]">
          Tell us about your project
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
