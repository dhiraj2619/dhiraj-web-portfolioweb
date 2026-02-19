import Navbar from "./components/Navbar";
import HeroSkillsReveal from "./components/skills/HeroSkillsReveal";
import SkillsSection from "./components/skills/SkillsSection";

const PortfolioPage = () => {
  return(
     <>
       <Navbar/>

       <main>
           <HeroSkillsReveal/>
           <SkillsSection
             eyebrow="Selected Work"
             title="Projects and Case Studies"
           />
       </main>
     </>
  )
}

export default PortfolioPage;
