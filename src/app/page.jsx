"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import PreLoader from "./components/preloader/PreLoader";
import Services from "./components/services/Services";
import HeroSkillsReveal from "./components/skills/HeroSkillsReveal";
import SkillsSection from "./components/skills/SkillsSection";
import gsap from "gsap";

gsap.registerPlugin("ScrollTrigger");

const PortfolioPage = () => {
  const pageRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.to(pageRef.current, {
      backgroundColor: "#000000",
      ease: "none",
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <PreLoader />
      <Navbar />

      <main>
        <HeroSkillsReveal />
        <SkillsSection />

        <div ref={servicesRef}>
          <Services />
        </div>
      </main>
    </>
  );
};

export default PortfolioPage;
