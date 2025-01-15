import React from "react";
import aboutImage from "../assets/about.jpg";
import { useLanguage } from "../contexts/LanguageContext";

const AboutMe: React.FC = () => {
  const { translations } = useLanguage();
  
  return (
    <section className="bg-ivory py-10">
      <div className="max-padd-container flex items-center justify-between h-[500px]">
        {/* Left Side */}
        <div
          className="relative w-1/3 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className="bg-taupe border border-mahogany shadow-2xl rounded-lg w-80 h-80 transform group-hover:rotate-6 transition-transform duration-700">
            <img
              src={aboutImage}
              alt="about"
              className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-2/3 relative flex flex-col items-center justify-center"
          data-aos="flip-left"
          data-aos-duration="2000"
          data-aos-delay="700"
        >
          <h1 className="text-4xl font-extrabold mb-4 text-center text-mahogany">
            {translations.about_me_title}
          </h1>
          <p
            className="text-lg mt-12 text-gray-700 leading-relaxed whitespace-pre-line"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            {translations.about_me_description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
