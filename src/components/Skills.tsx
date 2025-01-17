import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import viteLogo from "../assets/vite.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import excelLogo from "../assets/excel.png";
import oracleLogo from "../assets/oracle.png";
import { useLanguage } from "../contexts/LanguageContext";

const Skills: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="py-10">
      <div className="max-padd-container flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-mahogany">{translations.skills_title}</h1>
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
          {[htmlLogo, cssLogo, jsLogo, viteLogo, reactLogo, tailwindLogo, excelLogo, oracleLogo].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="h-20"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay={`${300 * (index + 1)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
