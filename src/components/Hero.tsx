import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="relative mt-4 mb-10">

      <div className="max-padd-container flex flex-col-reverse md:flex-row items-center justify-between md:h-[500px] md:gap-4">
        {/* Left Side */}
        <motion.div
          className="mt-4 md:mt-0 md:w-3/5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <p className="md:text-lg">{translations.hero_greeting} </p>
          <h1 className="text-2xl md:text-4xl font-bold flexCenter md:flexBetween text-mahogany mt-1 mb-2 md:mt-2 md:mb-6 ">{translations.hero_name}</h1>

          <p className="text-sm md:text-lg flexCenter whitespace-pre-line">{translations.hero_about}</p>
          <div className="flex space-x-4 mt-6">
            <a
              href="/CV-Joao-Amaral.pdf"
              download
              className="px-6 py-3 bg-mahogany text-white rounded-md hover:bg-mahogany/80"
            >
              {translations.hero_downloadCV}
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className=" md:w-2/5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="bg-taupe border border-mahogany shadow-lg rounded-lg h-[225px] md:h-[450px]">
            <img src={photo} alt="My Photo" className="w-full h-full object-cover rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
