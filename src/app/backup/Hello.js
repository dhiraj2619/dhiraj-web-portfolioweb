"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroBanner from "../herobanner/HeroBanner";

const skillGroups = [
  ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  ["Node.js", "Express", "REST APIs", "JWT", "Socket.IO"],
  ["MongoDB", "PostgreSQL", "Redis", "Prisma", "Docker"],
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

      <section
        className="relative z-20 -mt-16 px-4 md:px-8"
        style={{
          transform: `translateY(${skillsPullDown}px)`,
        }}
      >
        <div className="mx-auto max-w-6xl rounded-[28px] border border-zinc-800 bg-[#060606] p-6 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
          <div className="text-center">
            <p className="text-zinc-400 uppercase tracking-[0.2em] text-xs md:text-sm">
              Core Skills
            </p>
            <h2 className="mt-3 text-white text-3xl md:text-5xl font-semibold">
              Crafting Fast, Reliable Products
            </h2>
          </div>

          <div className="mt-8 md:mt-10 space-y-4">
            {skillGroups.map((group, index) => (
              <div
                key={`group-${index}`}
                className="flex flex-wrap gap-3 justify-center"
              >
                {group.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 bg-zinc-900/75 px-5 py-2.5 text-zinc-100 text-sm md:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSkillsReveal;

// ("use client");

// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// // const SkillsSection = ({
// //   eyebrow = "What I Build With",
// //   title = "Skills That Power Projects",
// // }) => {
// //   const sectionRef = useRef(null);
// //   const cardsRef = useRef([]);

// //   useLayoutEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const sectionEl = sectionRef.current;
// //     const cards = cardsRef.current.filter(Boolean);
// //     if (!sectionEl || cards.length === 0) return;

// //     const ctx = gsap.context(() => {
// //       gsap.set(cards, { autoAlpha: 0, yPercent: 24, scale: 0.92 });
// //       gsap.set(cards[0], { autoAlpha: 1, yPercent: 0, scale: 1 });

// //       const tl = gsap.timeline({
// //         defaults: { ease: "power2.out", duration: 1 },
// //         scrollTrigger: {
// //           trigger: sectionEl,
// //           start: "top top",
// //           end: `+=${cards.length * 480}`,
// //           scrub: 1,
// //           pin: true,
// //           anticipatePin: 1,
// //         },
// //       });

// //       for (let i = 1; i < cards.length; i += 1) {
// //         tl.to(
// //           cards[i - 1],
// //           {
// //             yPercent: -8,
// //             scale: 0.94,
// //             autoAlpha: 0.45,
// //           },
// //           "+=0.15",
// //         ).to(
// //           cards[i],
// //           {
// //             yPercent: 0,
// //             scale: 1,
// //             autoAlpha: 1,
// //           },
// //           "<",
// //         );
// //       }
// //     }, sectionEl);

// //     return () => {
// //       ctx.revert();
// //     };
// //   }, []);

// //   return (
   
// //   );
// // };

// export default SkillsSection;
