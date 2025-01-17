import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();

  return (
    <footer className="py-10 bg-secondary text-center">
      <div className="max-padd-container flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-mahogany">{translations.footer_title}</h1>
        <p className="text-sm">Email: joaomramaral42@gmail.com</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-amaral-92614030b/"
            className="hover:text-highlight"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/jamaral42"
            className="hover:text-highlight"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
        <p className="text-xs mt-4">
          &copy; {currentYear} {translations.footer_text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
