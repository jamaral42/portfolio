import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion,  useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitch from './LanguageSwitcher'; 
import DownloadCV from './DownloadCV';
import photo from "../../assets/photo.jpg";
import cssImg from "../../assets/css.png";
import excelImg from "../../assets/excel.png";
import htmlImg from "../../assets/html.png";
import jsImg from "../../assets/js.png";
import oracleImg from "../../assets/oracle.png";
import reactImg from "../../assets/react.png";
import tailwindImg from "../../assets/tailwind.png";
import tsImg from "../../assets/ts.png";
import viteImg from "../../assets/vite.png";

interface HeroProps {
  isMobile: boolean;
}

const SPEED = 0.002;

const Hero: React.FC<HeroProps> = ({ isMobile }) => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [angle, setAngle] = useState(0);
  const [orbit, setOrbit] = useState(true);
  const orbitRadiusRef = useRef(window.innerWidth > 860 ? 200 : 125);
  const removeTechY = useRef(window.innerHeight * 0.55);

  const orbitingImages = useMemo(() => [
    { src: cssImg, offset: 0 },
    { src: excelImg, offset: (2 * Math.PI) / 9 },
    { src: htmlImg, offset: (4 * Math.PI) / 9 },
    { src: jsImg, offset: (6 * Math.PI) / 9 },
    { src: oracleImg, offset: (8 * Math.PI) / 9 },
    { src: reactImg, offset: (10 * Math.PI) / 9 },
    { src: tailwindImg, offset: (12 * Math.PI) / 9 },
    { src: tsImg, offset: (14 * Math.PI) / 9 },
    { src: viteImg, offset: (16 * Math.PI) / 9 },
  ], []);
  
  // Parallax effect transformations
  const textY = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 2000]);

  // Handle screen resize
  const handleResize = useCallback(() => {
    const newRadius = window.innerWidth > 860 ? 200 : 125;
    if (orbitRadiusRef.current !== newRadius) {
      orbitRadiusRef.current = newRadius;
    }
  }, []);

  // Handle orbit stop on scroll
  const handleScroll = useCallback(() => {
    const shouldOrbit = window.scrollY <= removeTechY.current;
    if (orbit !== shouldOrbit) {
      setOrbit(shouldOrbit);
    }
  }, [orbit]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize, handleScroll]);
																	
		 
  useEffect(() => {
    let animationId: number;
    if (orbit) {
      const updateAngle = () => {
        setAngle((prev) => prev + SPEED);
        animationId = requestAnimationFrame(updateAngle);
      };
      updateAngle();
    }
    return () => cancelAnimationFrame(animationId);
  }, [orbit]);
  

  return (
    <section>
      <DownloadCV />
      <LanguageSwitch />

      {/* Left Side - Text */}
      <motion.div
        className="absolute left-[50%] md:left-[40%] top-[35%] md:top-[50%] -translate-x-1/2 -translate-y-1/2 z-20"
        style={{ y: textY }}
        initial={{ opacity: 0, x: window.innerWidth >= 768 ? -100 : 0, y: isMobile ? -100 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="flex flex-col text-5xl md:text-9xl text-center md:text-left font-bold font-[audiowide] mb-12">
          <h2>{t("hero.first_name")}</h2>
          <h2>{t("hero.last_name")}</h2>
          <h3 className="text-center text-lg md:text-4xl md:text-left font-bold mt-8 md:mt-4 font-[audiowide]">
            {t("hero.title")}
          </h3>
        </div>

      </motion.div>

      {/* Right Side - Image */}
      <AnimatePresence>
        {orbit && (
          <motion.div
            className="absolute left-[50%] md:left-[60%] top-[65%] md:top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-90 z-30"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={ {initial: { delay: 0.5, duration: 1 }, exit: { duration: 0.2, delay: 0 } }}
          >
              <img src={photo} alt={t("hero_photo_alt")} className="size-[200px] md:size-[400px] rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Orbiting Images */}
      <AnimatePresence>
        {orbit && (
          <motion.div
            className="absolute left-[50%] md:left-[60%] top-[65%] md:top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-90 z-10"
            style={{ y: imageY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <div className="relative flex items-center justify-center ">
              <div className="absolute size-[200px] flex items-center justify-center z-0">
                {orbitingImages.map(({ src, offset }, index) => {
                  const x = Math.cos(angle + offset) * orbitRadiusRef.current;
                  const y = Math.sin(angle + offset) * orbitRadiusRef.current;
                  return (
                    <motion.img
                      key={index}
                      src={src}
                      alt={`Orbiting ${index}`}
                      className="absolute size-8 md:size-15 object-cover rounded-full overflow-hidden"
                      style={{ x, y }}
                      initial={{ x: Math.random() * 500, y: Math.random() * 400 , opacity: 0 }}
                      animate={{ x, y, opacity: 1 }}
                      exit={{ x: Math.random() * 500 , y: Math.random() * 400 , opacity: 0 }}
                      transition={{ duration: 1.5 }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
