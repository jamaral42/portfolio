import React from "react";
import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";

const DownloadCV: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative top-8 left-8 w-min z-50 bg-tiffany-blue rounded-xl opacity-75 hover:opacity-100 flex items-center p-3">
      {/* Download CV Button */}
      <a
        href="/path/to/your-cv.pdf"
        download="Joao_Amaral_CV.pdf"
        className="inline-flex items-center gap-2 text-sm md:text-md font-semibold text-gunmetal rounded-lg hover:bg-highlight transition-all px-4 whitespace-nowrap"
      >
        <FaDownload /> {t("footer.downloadCV")}
      </a>
    </div>
  );
};

export default DownloadCV;
