"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    thumbnail: "/assets/images/service/webdev.jpg",
    title: "Custom Web Development",
    desc: "Fast, scalable, SEO-ready websites built for conversion.",
  },
  {
    thumbnail: "/assets/images/service/appdev.jpg",
    title: "Custom App Development",
    desc: "Fast, scalable, SEO-ready websites built for conversion.",
  },
  {
    thumbnail: "/assets/images/service/ecommerce.webp",
    title: "E-commerce Solutions",
    desc: "Clean interfaces with strong usability and visual hierarchy.",
  },
  {
    thumbnail: "/assets/images/service/performance-optimization.jpg",
    title: "Performance Optimization",
    desc: "Core Web Vitals tuning and runtime performance improvements.",
  },
  {
    thumbnail: "/assets/images/service/seo.jpg",
    title: "Web Analysis & SEO",
    desc: "GSAP-driven interactions that add polish and storytelling.",
  },
  {
    thumbnail: "/assets/images/service/hosting.jpg",
    title: "Deployment & Support",
    desc: "Production rollout, monitoring, and iterative improvements.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!sectionEl || cards.length === 0) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        x: 520,
        y: 180,
        rotate: 16,
        scale: 0.96,
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: `+=${services.length * 740}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        const state = { p: 0 };

        tl.to(
          state,
          {
            p: 1,
            duration: 1,
            ease: "none",
            onUpdate: () => {
              const p = state.p;

              const x = gsap.utils.interpolate(520, -520, p);

              // True parabola shape: edge high, middle peak (up), edge high again.
              const curve = Math.pow((p - 0.5) * 2, 2);
              const y = 180 * curve - 130;

              const rotate = gsap.utils.interpolate(14, -14, p);
              const scale =
                p < 0.5
                  ? gsap.utils.interpolate(0.86, 1, p / 0.5)
                  : gsap.utils.interpolate(1, 0.86, (p - 0.5) / 0.5);

              let alpha = 1;
              if (p < 0.12) alpha = p / 0.12;
              if (p > 0.88) alpha = (1 - p) / 0.12;

              gsap.set(card, {
                x,
                y,
                rotate,
                scale,
                autoAlpha: alpha,
              });
            },
          },
          i,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-services-dotted relative h-screen overflow-hidden pt-20"
    >
      <div className="max-w-8xl mx-auto px-2 md:px-6">
        <h3 className="text-white text-center text-[20px] md:text-[30px] font-brokmannsemibold my-3">
          My Services
        </h3>
      </div>

      <div className="relative h-[70vh]">
        {services.map((service, i) => (
          <article
            key={service.title}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="absolute left-1/2 top-1/2 w-[88vw] max-w-[560px] -translate-x-1/2 -translate-y-1/3 text-white  scard"
          >
            <img
              src={service.thumbnail}
              className="h-[250px] rounded-2xl w-full object-cover"
              alt=""
            />
            <h4 className="text-xl  md:text-2xl font-brokmannsemibold mt-3">
              {service.title}
            </h4>
            <p className="mt-3 text-sm md:text-base text-white/85">
              {service.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
