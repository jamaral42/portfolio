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
  const [totalHeight, setTotalHeight] = useState(2500); // Initial estimated height

  const aboutY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const timelineY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const skillsY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const projectsY = useTransform(scrollYProgress, [0, 1], [0, -1670]);
  const footerY = useTransform(scrollYProgress, [0, 1], [0, -1670]);

  // Update total page height when Timeline updates
  useEffect(() => {
    const baseHeight = 1850; // Base height without the Timeline
    setTotalHeight(baseHeight + timelineHeight);
  }, [timelineHeight]);

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
            <Hero />
          </motion.div>

          <motion.div className="h-[100vh]" style={{ y: aboutY }}>
            <AboutMe />
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
