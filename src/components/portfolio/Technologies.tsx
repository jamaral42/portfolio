import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cssImg from "../../assets/css.png";
import excelImg from "../../assets/excel.png";
import htmlImg from "../../assets/html.png";
import jsImg from "../../assets/js.png";
import oracleImg from "../../assets/oracle.png";
import reactImg from "../../assets/react.png";
import tailwindImg from "../../assets/tailwind.png";
import tsImg from "../../assets/ts.png";
import viteImg from "../../assets/vite.png";

const Technologies: React.FC = () => {
  const SPEED = 0.002;
  const [angle, setAngle] = useState(0);
  const [orbitRadius, setOrbitRadius] = useState(window.innerWidth * 0.15); // Dynamic initial radius

  useEffect(() => {
    let animationId: number;
    const updateAngle = () => {
      setAngle((prev) => prev + SPEED);
      animationId = requestAnimationFrame(updateAngle);
    };
    updateAngle();
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setOrbitRadius(Math.min(window.innerWidth, window.innerHeight) * 0.3); // Adjust radius dynamically
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbitingImages = [
    { src: cssImg, offset: 0 },
    { src: excelImg, offset: (2 * Math.PI) / 9 },
    { src: htmlImg, offset: (4 * Math.PI) / 9 },
    { src: jsImg, offset: (6 * Math.PI) / 9 },
    { src: oracleImg, offset: (8 * Math.PI) / 9 },
    { src: reactImg, offset: (10 * Math.PI) / 9 },
    { src: tailwindImg, offset: (12 * Math.PI) / 9 },
    { src: tsImg, offset: (14 * Math.PI) / 9 },
    { src: viteImg, offset: (16 * Math.PI) / 9 },
  ];

  return (
    <div className="relative size-[400px] flex items-center justify-center">
      {orbitingImages.map(({ src, offset }, index) => {
        const x = Math.cos(angle + offset) * orbitRadius;
        const y = Math.sin(angle + offset) * orbitRadius;

        return (
          <motion.img
            key={index}
            src={src}
            alt={`Orbiting ${index}`}
            className="absolute size-7 md:size-15 object-cover rounded-full"
            style={{ x, y }}
          />
        );
      })}
    </div>
  );
};

export default Technologies;
