import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
// import tsLogo from "../assets/ts.png";
import viteLogo from "../assets/vite.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import excelLogo from "../assets/excel.png";
import oracleLogo from "../assets/oracle.png";
import { useLanguage } from "../contexts/LanguageContext";

const Skills: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id ="skills" className="py-10">
      <div className="max-padd-container flex  flex-col items-center justify-center h-[250px]">    
        <h1 className="text-3xl font-bold mb-4">{translations.skills_title}</h1>
        <div className="flex gap-4">
          <img 
            src={htmlLogo} alt="" 
            className="h-24"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="300"
          />
          <img 
            src={cssLogo} alt="" 
            className="h-24"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="600"
          />
          <img 
            src={jsLogo} alt="" 
            className="h-24 p-2"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="900"
          />
          {/*}
          <img 
            src={tsLogo} alt="" 
            className="h-24"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="1200"
          />
          */}
          <img 
            src={viteLogo} alt="" 
            className="h-24"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="1200"
          />
          <img 
            src={reactLogo} alt="" 
            className="h-24 p-2"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="1500"
          />
          <img 
            src={tailwindLogo} alt="" 
            className="h-24 p-4"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="1800"
          />
          <img 
            src={excelLogo} alt="" 
            className="h-24"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="2100"
          />
          <img 
            src={oracleLogo} alt="" 
            className="h-24 p-2"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="2400"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
