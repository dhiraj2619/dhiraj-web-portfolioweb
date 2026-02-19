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

const SkillsSection = ({
  eyebrow = "What I Build With",
  title = "Skills That Power Projects",
}) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!sectionEl || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(cards, { autoAlpha: 0, yPercent: 24, scale: 0.92 });
      gsap.set(cards[0], { autoAlpha: 1, yPercent: 0, scale: 1 });

      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 1 },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: `+=${cards.length * 480}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < cards.length; i += 1) {
        tl.to(
          cards[i - 1],
          {
            yPercent: -8,
            scale: 0.94,
            autoAlpha: 0.45,
          },
          "+=0.15"
        ).to(
          cards[i],
          {
            yPercent: 0,
            scale: 1,
            autoAlpha: 1,
          },
          "<"
        );
      }
    }, sectionEl);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-black px-4 md:px-8 py-16">
      <div className="mx-auto h-full max-w-6xl">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-zinc-400 uppercase tracking-[0.2em] text-xs md:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-white text-3xl md:text-5xl font-semibold">
            {title}
          </h2>
        </div>

        <div className="relative mx-auto h-[68vh] max-w-3xl">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`absolute inset-0 rounded-3xl border border-zinc-700/70 bg-gradient-to-br ${skill.tone} p-6 md:p-10 shadow-[0_25px_90px_rgba(0,0,0,0.65)]`}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-[0.18em]">
                    Skill Card {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-white text-2xl md:text-4xl leading-tight">
                    {skill.title}
                  </h3>
                </div>

                <ul className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-zinc-600/60 bg-black/35 px-4 py-3 text-zinc-100 text-sm md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
