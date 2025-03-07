import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <div className="relative top-8 md:top-16 left-4 md:left-8 w-min z-50 bg-tiffany-blue rounded-xl opacity-75 hover:opacity-100 flex items-center p-3 text-sm md:text-md gap-2 ">
      <button
        onClick={() => changeLanguage("en")}
        className={`transition-colors ${i18n.language === "en" ? "font-bold text-gunmetal" : "text-gunmetal cursor-pointer"}`}
      >
        EN
      </button>
      <span className="text-gunmetal">|</span>
      <button
        onClick={() => changeLanguage("pt")}
        className={`transition-colors ${i18n.language === "pt" ? "font-bold text-gunmetal" : "text-gunmetal cursor-pointer"}`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitch;
