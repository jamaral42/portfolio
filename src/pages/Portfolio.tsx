import React, { lazy, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

import Header from "../components/portfolio/Header";
import Hero from "../components/portfolio/Hero";
import AboutMe from "../components/portfolio/AboutMe";
const Timeline = lazy(() => import("../components/portfolio/Timeline"));
const Skills = lazy(() => import("../components/portfolio/Skills"));
const Projects = lazy(() => import("../components/portfolio/Projects"));
const Footer = lazy(() => import("../components/portfolio/Footer"));

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [totalHeight, setTotalHeight] = useState(timelineHeight + (isMobile ? 2200 : 1900));

  const aboutY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const skillsY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const projectsY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const footerY = useTransform(scrollYProgress, [0, 1], [0, -1670]);

  const calculateBaseHeight = (width: number) => (width < 768 ? 2200 : 1900);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
      setTotalHeight(calculateBaseHeight(window.innerWidth) + timelineHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [timelineHeight]); // Recalculate on timeline change

  useEffect(() => {
    setTotalHeight(calculateBaseHeight(window.innerWidth) + timelineHeight);
  }, [timelineHeight, isMobile]);

  return (
    <motion.div className="relative overflow-hidden">
      <I18nextProvider i18n={i18n}>
        <Header />

        {/* Outer div now dynamically resizes based on totalHeight */}
        <div
          className="bg-platinum transition-all duration-300"
          style={{ height: `${totalHeight}px` }}
        >
          <motion.div className="sticky top-0 h-[100vh]">
            <Hero isMobile={isMobile} />
          </motion.div>

          <motion.div className={`${isMobile ? 'h-[130vh]' : 'h-[100vh]'}`} style={{ y: aboutY }}>
            <AboutMe isMobile={isMobile} />
          </motion.div>

          <motion.div style={{ y: timelineY, minHeight: timelineHeight }}>
            <Timeline onHeightChange={setTimelineHeight} />
          </motion.div>

          <motion.div style={{ y: skillsY }}>
            <Skills />
          </motion.div>

          <motion.div style={{ y: projectsY }}>
            <Projects />
          </motion.div>

          <motion.div style={{ y: footerY }}>
            <Footer />
          </motion.div>

        </div>
      </I18nextProvider>
    </motion.div>
  );
};

export default App;
