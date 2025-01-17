import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutMe: React.FC = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="bg-ivory py-10">
      <div className="max-padd-container flex flex-col items-center space-y-6">


        {/* Text Section */}
        <div
          className="w-full flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-mahogany">
            {translations.about_me_title}
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line mt-4 text-center">
            {translations.about_me_description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
