import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("lang") || i18n.language;
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setCurrentLanguage(lng);
  };

  const languages = ["pt", "en"];

  return (
    <div className="text-xs md:text-sm space-x-2 text-mahogany font-bold flex items-center">
      {languages.map((lng) => (
        <React.Fragment key={lng}>
          <span
            onClick={() => changeLanguage(lng)}
            className={`cursor-pointer ${currentLanguage === lng ? "font-bold" : "text-gray-500"}`}
          >
            {lng.toUpperCase()}
          </span>
          {languages.indexOf(lng) < languages.length - 1 && <span>|</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
