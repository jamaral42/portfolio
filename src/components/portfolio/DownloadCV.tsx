import React from "react";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import CV_PT from "../../assets/CV-Joao-Amaral-PT.pdf";
import CV_EN from "../../assets/CV-Joao-Amaral-EN.pdf";

const DownloadCV: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Define o caminho do arquivo de acordo com o idioma
  const cvFile = i18n.language === "pt" ? CV_PT : CV_EN;

  return (
    <div className="relative top-4 md:top-8 left-4 md:left-8 w-min z-50 bg-tiffany-blue rounded-xl opacity-75 hover:opacity-100 flex items-center p-3">
      {/* Botão de Download do CV */}
      <a
        href={cvFile}
        download={cvFile.split("/").pop()} // Mantém o nome original do arquivo
        className="inline-flex items-center gap-2 text-sm md:text-md font-semibold text-gunmetal rounded-lg hover:bg-highlight transition-all px-4 whitespace-nowrap"
      >
        <FaDownload /> {t("footer.downloadCV")}
      </a>
    </div>
  );
};

export default DownloadCV;
