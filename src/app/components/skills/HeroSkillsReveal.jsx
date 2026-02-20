"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroBanner from "../herobanner/HeroBanner";

const Skills = [
  {
    id: 1,
    skillImg: "/assets/images/icons/html.svg",
  },
  {
    id: 2,
    skillImg: "/assets/images/icons/css.svg",
  },
  {
    id: 3,
    skillImg: "/assets/images/icons/javascript.svg",
  },
  {
    id: 4,
    skillImg: "/assets/images/icons/node-js.svg",
  },
  {
    id: 5,
    skillImg: "/assets/images/icons/react.svg",
  },
  {
    id: 6,
    skillImg: "/assets/images/icons/wordpress.svg",
  },
  {
    id: 7,
    skillImg: "/assets/images/icons/mongodb.svg",
  },
  {
    id: 8,
    skillImg: "/assets/images/icons/mysql.svg",
  },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const HeroSkillsReveal = () => {
  const rootRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const travel = Math.max(520, Math.min(860, window.innerHeight * 0.95));
      const next = clamp((-rect.top || 0) / travel, 0, 1);
      setProgress(next);
      rafId = 0;
    };

    const onScrollOrResize = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const heroScale = 1 - progress * 0.08;
  const heroShift = -progress * 420;
  const heroShadow = 0.2 + progress * 0.35;
  const revealProgress = clamp((progress - 0.58) / 0.42, 0, 1);
  const skillsPullDown = -110 + revealProgress * 165;

  return (
    <section ref={rootRef} className="">
      <div className="sticky top-0 z-30 pt-2">
        <HeroBanner
          className="transition-[transform] duration-150 ease-out"
          style={{
            transform: `translateY(${heroShift}px) scale(${heroScale})`,
            transformOrigin: "center top",
            filter: `drop-shadow(0 24px 36px rgba(0, 0, 0, ${heroShadow.toFixed(3)}))`,
          }}
        />
      </div>

      <div className="relative mt-20">
        <div className="max-w-8xl mx-auto px-10">
          <div className="grid grid-cols-8 gap-x-5">
            {Skills.map((item, i) => (
              <div className="bg-[#ffffff] p-8 h-[140px] w-full flex justify-center items-center rounded-2xl">
                <img src={item.skillImg} className="h-20 w-auto" alt={item.skillImg} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkillsReveal;
