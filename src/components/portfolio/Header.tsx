import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ExpandableHeader = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsHovered(false);
  };

  const goToContacts = () => {
    window.scrollTo({ top: window.innerHeight*3, behavior: "smooth" });
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ height: 50, width: 50 }}
      animate={isHovered ? { width: 200 } : { width: 50}}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-4 top-4 size-25 rounded-3xl shadow-xl bg-tiffany-blue text-platinum cursor-pointer z-50 flex items-center justify-center p-4"
    >
      {!isHovered ? (
        <div className="flex items-center justify-center w-full h-full">
          <FaArrowRight className="size-5 md:size-6" onClick={() => setIsHovered(true)} />
        </div>
      ) : (
        <div className="w-full flex justify-between items-center gap-4">
          <button onClick={scrollToTop} className="text-lg md:text-xl font-semibold">
            {t("header.top")}
          </button>
          <button onClick={goToContacts} className="text-lg md:text-xl font-semibold">
            {t("header.contacts")}
          </button>
          <FaArrowLeft className="size-5 md:size-6" onClick={() => setIsHovered(false)} />
        </div>
      )}
    </motion.div>
  );
};

export default ExpandableHeader;
