import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";
import { useLanguage } from "../contexts/LanguageContext";

const Hero: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="relative mt-4 mb-10">

      <div className="max-padd-container flex items-center justify-between h-[500px]">
        {/* Left Side */}
        <motion.div
          className="w-3/5"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <p>{translations.hero_greeting}</p>
          <h1 className="text-5xl font-bold text-mahogany mb-6">{translations.hero_name}</h1>
          <p className="text-lg whitespace-pre-line">{translations.hero_about}</p>
          <div className="flex space-x-4 mt-6">
            <a
              href="/path-to-file.pdf"
              download
              className="px-6 py-3 bg-mahogany text-white rounded-md hover:bg-mahogany/80"
            >
              {translations.hero_downloadCV}
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="relative w-2/5 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="bg-taupe border border-mahogany shadow-lg rounded-lg h-[450px]">
            <img src={photo} alt="My Photo" className="w-full h-full object-cover rounded-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
