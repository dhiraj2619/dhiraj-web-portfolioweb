"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroBanner from "../herobanner/HeroBanner";

const Skills = [
  { id: 1, skillImg: "/assets/images/icons/html.svg" },
  { id: 2, skillImg: "/assets/images/icons/css.svg" },
  { id: 3, skillImg: "/assets/images/icons/javascript.svg" },
  { id: 4, skillImg: "/assets/images/icons/node-js.svg" },
  { id: 5, skillImg: "/assets/images/icons/react.svg" },
  { id: 6, skillImg: "/assets/images/icons/wordpress.svg" },
  { id: 7, skillImg: "/assets/images/icons/mongodb.svg" },
  { id: 8, skillImg: "/assets/images/icons/mysql.svg" },
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
      const travel = Math.max(900, Math.min(1300, window.innerHeight * 1.4));
      const next = clamp((-rect.top || 0) / travel, 0, 1);
      setProgress(next);
      rafId = 0;
    };

    const onScrollOrResize = () => {
      if (!rafId) rafId = window.requestAnimationFrame(update);
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

  const heroScale = 1 - progress * 0.07;
  const heroShift = -progress * 520;
  const heroShadow = 0.2 + progress * 0.35;

  // Delay reveal until hero has already moved up a lot.
  const revealProgress = clamp((progress - 0.64) / 0.36, 0, 1);

  // Pull out from behind: starts hidden above, then moves downward.
  const skillsPullDown = -180 + revealProgress * 240;

  return (
    <section ref={rootRef} className="relative h-[195vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-30 pt-2">
          <HeroBanner
            className="transition-[transform] duration-150 ease-out"
            style={{
              transform: `translateY(${heroShift}px) scale(${heroScale})`,
              transformOrigin: "center top",
              filter: `drop-shadow(0 24px 36px rgba(0, 0, 0, ${heroShadow.toFixed(3)}))`,
            }}
          />
        </div>

        <div
          className="absolute inset-x-0 z-20 px-4 md:px-8"
          style={{
            top: "72vh",
            transform: `translateY(${skillsPullDown}px)`,
          }}
        >
          <div className="max-w-8xl mx-auto px-2 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5">
              {Skills.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 md:p-8 h-[110px] md:h-[140px] w-full flex justify-center items-center rounded-2xl"
                >
                  <img
                    src={item.skillImg}
                    className="h-14 md:h-20 w-auto"
                    alt={`skill-${item.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkillsReveal;
