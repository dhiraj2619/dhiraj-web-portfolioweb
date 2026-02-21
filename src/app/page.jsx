import Navbar from "./components/Navbar";
import PreLoader from "./components/preloader/PreLoader";
import HeroSkillsReveal from "./components/skills/HeroSkillsReveal";
import SkillsSection from "./components/skills/SkillsSection";

const PortfolioPage = () => {
  return (
    <>
      <PreLoader />
      <Navbar />

      <main>
        <HeroSkillsReveal />
        <SkillsSection />
      </main>
    </>
  );
};

export default PortfolioPage;
