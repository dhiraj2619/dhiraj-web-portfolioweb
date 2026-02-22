"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  { id: 1, name: "HTML", skillImg: "/assets/images/icons/html.svg" },
  { id: 2, name: "CSS", skillImg: "/assets/images/icons/css.svg" },
  { id: 3, name: "JavaScript", skillImg: "/assets/images/icons/javascript.svg" },
  { id: 4, name: "Node.js", skillImg: "/assets/images/icons/node-js.svg" },
  { id: 5, name: "React", skillImg: "/assets/images/icons/react.svg" },
  { id: 6, name: "WordPress", skillImg: "/assets/images/icons/wordpress.svg" },
  { id: 7, name: "MongoDB", skillImg: "/assets/images/icons/mongodb.svg" },
  { id: 8, name: "MySQL", skillImg: "/assets/images/icons/mysql.svg" },
  { id: 9, name: "Next.js", abbr: "NX" },
  { id: 10, name: "Git", abbr: "GIT" },
  { id: 11, name: "Figma", abbr: "FG" },
  { id: 12, name: "React Native", skillImg: "/assets/images/icons/react.svg", abbr: "RN" },
];

const SkillsSection = () => {
  return (
    <section className="max-w-8xl mx-auto px-2 md:px-6 py-2">
      <h3 className="text-[#000] text-[20px] md:text-[30px] font-brokmannsemibold my-3">
        My Skills
      </h3>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={14}
        slidesPerView={2}
        loop
        speed={700}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 18 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
          1400: { slidesPerView: 8, spaceBetween: 20 },
        }}
      >
        {skills.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white p-4 md:p-6 h-[120px] md:h-[145px] w-full flex flex-col justify-center items-center rounded-2xl border border-[#ececec]">
              {item.skillImg ? (
                <img
                  src={item.skillImg}
                  className="h-12 md:h-16 w-auto"
                  alt={item.name}
                />
              ) : (
                <div className="h-12 md:h-16 min-w-12 md:min-w-16 px-2 rounded-xl bg-[#111] text-white text-[11px] md:text-[13px] flex items-center justify-center font-semibold tracking-[0.06em]">
                  {item.abbr}
                </div>
              )}
              <span className="mt-2 text-[12px] md:text-[13px] text-[#444] text-center leading-tight">
                {item.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SkillsSection;
