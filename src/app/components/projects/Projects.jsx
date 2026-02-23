import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

const projects = [
  {
    title: "Brand and Beeyond",
    description:
      "Branding agency website focused on identity, digital presence, and growth.",
    image: "/assets/images/projects/brandandbeeyond.png",
    tone: "from-zinc-900 via-zinc-800 to-black",
  },
  {
    title: "Touchwood Bliss Membership App",
    description:
      "Built in React Native to manage and book memberships for Touchwood Bliss resort.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    tone: "from-zinc-950 via-zinc-900 to-black",
  },
  {
    title: "Fairytale Weddings Website",
    description:
      "Wedding website created for Touchwood Bliss to showcase events and services.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    tone: "from-zinc-900 via-black to-zinc-900",
  },
];

const Projects = ({
  eyebrow = "Featured Work",
  title = "Projects I Built",
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
          "+=0.15",
        ).to(
          cards[i],
          {
            yPercent: 0,
            scale: 1,
            autoAlpha: 1,
          },
          "<",
        );
      }
    }, sectionEl);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen px-4 md:px-8 py-16" id="projects">
      <div className="mx-auto h-full max-w-6xl">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-zinc-400 uppercase tracking-[0.2em] text-xs md:text-sm">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-white text-[30px] md:text-[40px] font-semibold">
            {title}
          </h2>
        </div>

        <div className="relative mx-auto h-[68vh] max-w-3xl">
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`absolute inset-0 overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br ${project.tone} bg-opacity-40 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl`}
            >
              <div className="h-[62%] w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex h-[38%] flex-col justify-between border-t border-white/25 bg-white/10 p-5 backdrop-blur-md md:p-6">
                <div>
                  <p className="text-zinc-400 text-xs uppercase tracking-[0.18em]">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-white text-xl md:text-3xl leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-zinc-100/90 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="my-4 w-fit rounded-xl border border-white/45 bg-white/20 px-5 py-2.5 text-white text-sm md:text-base shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition hover:bg-white/30"
                >
                  Know More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
