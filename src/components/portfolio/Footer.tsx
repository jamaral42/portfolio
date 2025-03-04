import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Use the hook
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative py-10 bg-platinum text-center">
      <div className="max-padd-container flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-mahogany">{t('footer.title')}</h1> {/* Translate */}
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
          &copy; {currentYear} {t('footer.text')} {/* Translate */}
        </p>
      </div>
    </div>
  );
};

export default Footer;