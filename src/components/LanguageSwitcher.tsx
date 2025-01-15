import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { switchLanguage, currentLanguage } = useLanguage();


  return (
    <div className="max-padd-container mt-8">
      <button
        className={`text-lg font-medium pr-2 ${
          currentLanguage === "pt" ? "text-mahogany" : "text-gray-500 hover:text-mahogany"
        }`}
        onClick={() => switchLanguage("pt")}
      >
        PT
      </button>
      <span className="mx-1 text-gray-400">|</span>
      <button
        className={`text-lg font-medium px-2 ${
          currentLanguage === "en" ? "text-mahogany" : "text-gray-500 hover:text-mahogany"
        }`}
        onClick={() => switchLanguage("en")}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitcher;
