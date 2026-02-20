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





"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    title: "Frontend Engineering",
    items: ["React", "Next.js", "Tailwind CSS", "Animation Systems"],
    tone: "from-zinc-900 via-zinc-800 to-black",
  },
  {
    title: "Backend Engineering",
    items: ["Node.js", "Express", "REST APIs", "Authentication"],
    tone: "from-zinc-950 via-zinc-900 to-black",
  },
  {
    title: "Database & Cloud",
    items: ["MongoDB", "PostgreSQL", "Redis", "Deployment"],
    tone: "from-black via-zinc-900 to-zinc-950",
  },
  {
    title: "Performance & UX",
    items: ["Core Web Vitals", "SEO", "A11y", "Micro Interactions"],
    tone: "from-zinc-900 via-black to-zinc-900",
  },
];

// const SkillsSection = ({
//   eyebrow = "What I Build With",
//   title = "Skills That Power Projects",
// }) => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const sectionEl = sectionRef.current;
//     const cards = cardsRef.current.filter(Boolean);
//     if (!sectionEl || cards.length === 0) return;

//     const ctx = gsap.context(() => {
//       gsap.set(cards, { autoAlpha: 0, yPercent: 24, scale: 0.92 });
//       gsap.set(cards[0], { autoAlpha: 1, yPercent: 0, scale: 1 });

//       const tl = gsap.timeline({
//         defaults: { ease: "power2.out", duration: 1 },
//         scrollTrigger: {
//           trigger: sectionEl,
//           start: "top top",
//           end: `+=${cards.length * 480}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       for (let i = 1; i < cards.length; i += 1) {
//         tl.to(
//           cards[i - 1],
//           {
//             yPercent: -8,
//             scale: 0.94,
//             autoAlpha: 0.45,
//           },
//           "+=0.15",
//         ).to(
//           cards[i],
//           {
//             yPercent: 0,
//             scale: 1,
//             autoAlpha: 1,
//           },
//           "<",
//         );
//       }
//     }, sectionEl);

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative h-screen bg-black px-4 md:px-8 py-16"
//     >
//       <div className="mx-auto h-full max-w-6xl">
//         <div className="mb-10 md:mb-14 text-center">
//           <p className="text-zinc-400 uppercase tracking-[0.2em] text-xs md:text-sm">
//             {eyebrow}
//           </p>
//           <h2 className="mt-4 text-white text-3xl md:text-5xl font-semibold">
//             {title}
//           </h2>
//         </div>

//         <div className="relative mx-auto h-[68vh] max-w-3xl">
//           {skills.map((skill, index) => (
//             <article
//               key={skill.title}
//               ref={(el) => {
//                 cardsRef.current[index] = el;
//               }}
//               className={`absolute inset-0 rounded-3xl border border-zinc-700/70 bg-gradient-to-br ${skill.tone} p-6 md:p-10 shadow-[0_25px_90px_rgba(0,0,0,0.65)]`}
//             >
//               <div className="flex h-full flex-col justify-between">
//                 <div>
//                   <p className="text-zinc-400 text-xs uppercase tracking-[0.18em]">
//                     Skill Card {String(index + 1).padStart(2, "0")}
//                   </p>
//                   <h3 className="mt-4 text-white text-2xl md:text-4xl leading-tight">
//                     {skill.title}
//                   </h3>
//                 </div>

//                 <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
//                   {skill.items.map((item) => (
//                     <li
//                       key={item}
//                       className="rounded-xl border border-zinc-600/60 bg-black/35 px-4 py-3 text-zinc-100 text-sm md:text-base"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


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
  const skillsOpacity = 0.2 + revealProgress * 0.8;

  return (
    <section ref={rootRef} className="relative h-[195vh] bg-black">
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
            opacity: skillsOpacity,
          }}
        >
          <div className="max-w-8xl mx-auto px-2 md:px-6">
            <div className="rounded-[26px] border border-zinc-800 bg-[#060606] px-4 py-8 md:px-10 md:py-12 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5">
                {Skills.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-5 md:p-8 h-[110px] md:h-[140px] w-full flex justify-center items-center rounded-2xl"
                  >
                    <img src={item.skillImg} className="h-14 md:h-20 w-auto" alt={`skill-${item.id}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkillsReveal;
