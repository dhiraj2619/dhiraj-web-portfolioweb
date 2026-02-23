"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import PreLoader from "./components/preloader/PreLoader";
import Services from "./components/services/Services";
import HeroSkillsReveal from "./components/skills/HeroSkillsReveal";
import SkillsSection from "./components/skills/SkillsSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./components/projects/Projects";

gsap.registerPlugin(ScrollTrigger);

const PortfolioPage = () => {
  const pageRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.to(pageRef.current, {
      background: "linear-gradient(-70deg, #202020, #000000)",
      ease: "none",
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 30%",
        end: "+=220",
        scrub: 0.2,
      },
    });
  }, []);

  return (
    <>
      <PreLoader />
      <Navbar />

      <main ref={pageRef} className="min-h-screen">
        <HeroSkillsReveal />
        <SkillsSection />
        <div ref={servicesRef}>
          <Services />
          <Projects />
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
