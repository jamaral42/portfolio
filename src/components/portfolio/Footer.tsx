import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-6 bg-platinum text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-mahogany">{t('footer.title')}</h1>
        
        {/* Contact Info */}
        <p className="text-sm text-gunmetal">Email: <a href="mailto:joaomramaral42@gmail.com" className="hover:underline">joaomramaral42@gmail.com</a></p>
        
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-amaral-92614030b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mahogany hover:text-highlight transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/jamaral42"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mahogany hover:text-highlight transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-xs text-gunmetal mt-2">
          &copy; {currentYear} {t('footer.text')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
