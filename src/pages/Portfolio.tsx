import React, { lazy, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Hero from "../components/portfolio/Hero";
import AboutMe from "../components/portfolio/AboutMe";
const Timeline = lazy(() => import("../components/portfolio/Timeline"));
const Skills = lazy(() => import("../components/portfolio/Skills"));
const Projects = lazy(() => import("../components/portfolio/Projects"));

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [heroHeight, setHeroHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [skillsHeight, setSkillsHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const calculateBaseHeight = (width: number) => (width < 768 ? 2500 : 1800);

  const [totalHeight, setTotalHeight] = useState(
    calculateBaseHeight(window.innerWidth)
  );

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -1670]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setTotalHeight(
        heroHeight + aboutHeight + timelineHeight + skillsHeight + projectsHeight - 1600
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [heroHeight, aboutHeight, timelineHeight, skillsHeight, projectsHeight]);

  useEffect(() => {
    setTotalHeight(
      heroHeight + aboutHeight + timelineHeight + skillsHeight + projectsHeight - 1600
    );
  }, [heroHeight, aboutHeight, timelineHeight, skillsHeight, projectsHeight, isMobile]);

  return (
    <motion.div className="relative overflow-hidden">
      {/* Outer div dynamically resizes based on totalHeight */}
      <div className="bg-platinum transition-all duration-300" style={{ height: `${totalHeight}px` }}>
        <motion.div className="sticky top-0" style={{ height: heroHeight }}>
          <Hero onHeightChange={setHeroHeight} isMobile={isMobile} />
        </motion.div>

        <motion.div style={{ y: sectionY, height: aboutHeight }}>
          <AboutMe onHeightChange={setAboutHeight} isMobile={isMobile} />
        </motion.div>

        <motion.div style={{ y: sectionY, minHeight: timelineHeight }}>
          <Timeline onHeightChange={setTimelineHeight} isMobile={isMobile} />
        </motion.div>

        <motion.div style={{ y: sectionY, height: skillsHeight }}>
          <Skills onHeightChange={setSkillsHeight} isMobile={isMobile} />
        </motion.div>

        <motion.div style={{ y: sectionY, height: projectsHeight }}>
          <Projects onHeightChange={setProjectsHeight} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default App;
