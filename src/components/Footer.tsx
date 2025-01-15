import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { translations } = useLanguage();

  return (
    <footer className="py-10">
      <div className="max-padd-container flex flex-col items-center">
        <h1 className="text-mahogany text-3xl font-bold text-center mb-4">{translations.footer_title}</h1>
        <p className="text-lg text-center">Email: joaomramaral42@gmail.com</p>

        <div className="flex gap-4 mt-3">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-amaral-92614030b/"
            className="text-md md:text-xl flex items-center gap-3 hover:text-highlight"
          >
            <FaLinkedin className="text-lg md:text-xl" />
          </a>
          <a
            href="https://github.com/jamaral42"
            className="text-md md:text-xl flex items-center gap-3 hover:text-highlight"
          >
            <FaGithub className="text-lg md:text-xl" />
          </a>
        </div>
      </div>

      <div className="text-center bg-secondary mt-12">
        <p className="text-sm md:text-md text-black">
          Copyright &copy; {currentYear} {translations.footer_text}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
