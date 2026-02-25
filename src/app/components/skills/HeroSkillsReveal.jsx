"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroBanner from "../herobanner/HeroBanner";

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
            top: "45vh",
            transform: `translateY(${skillsPullDown}px)`,
          }}
        >
          <div className="max-w-8xl mx-auto px-4 md:px-6 mt-5" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[#4a4a4a] capitalize text-[14px] md:text-[16px]">
                  From vision to execution to results, I build products that
                  perform.
                </span>

                <h2 className="text-[#000] text-[44px] leading-[0.95] sm:text-[60px] md:text-[74px] lg:text-[96px] lg:leading-[90px] font-brokmannsemibold my-4 md:my-5">
                  About <br /> <span className="stroke-heading">Me</span> 
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-[#1f1f1f] text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[32px] max-w-[980px]">
                  I am Dhiraj R. Bhirud, a software developer focused on
                  building scalable UI interfaces and modern user experiences.
                  With 3+ years of experience in the IT industry, I combine
                  clean frontend engineering with practical product thinking to
                  deliver reliable digital solutions.
                </p>

                <p className="text-[#1f1f1f] text-[15px] leading-[26px] sm:text-[16px] sm:leading-[28px] md:text-[18px] md:leading-[32px] max-w-[980px] mt-4 md:mt-5">
                  My core focus areas are modern web technologies, performance
                  optimization, responsive design systems, and maintainable
                  architecture. I aim to transform ideas into fast, accessible,
                  and conversion-driven products that create measurable business
                  impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkillsReveal;
