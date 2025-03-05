import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaMusic, FaUtensils, FaFootballBall, FaPuzzlePiece, FaMapPin } from "react-icons/fa";


const interests = [
  { icon: <FaMusic className="w-20 text-4xl p-2" />, label: "Music" },
  { icon: <FaUtensils className="w-20 text-4xl p-2" />, label: "Food" },
  { icon: <FaFootballBall className="w-20 text-4xl p-2" />, label: "Sports" },
  { icon: <FaPuzzlePiece className="w-20 text-4xl p-2" />, label: "Puzzles" },
  { icon: <FaMapPin className="w-20 text-4xl p-2" />, label: "Pins" },
];

interface AboutMeProps {
  isMobile: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ isMobile }) => {
  const { t } = useTranslation();
  // Extract structured content
  const aboutContent = t("about_me.content", { returnObjects: true }) as Record<string, { title: string; content: string }>;
  const aboutDetails = t("about_me.details", { returnObjects: true }) as Record<string, string>;

  return (
    <section>
      <div>
        {/* Title */}
        <motion.h2
          className="text-5xl font-bold mb-4 text-gunmetal text-center items-center relative pt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {t("about_me.title")}
        </motion.h2>

        {/* Layout Container */}
        <div className="flex items-center w-full max-w-6xl mx-auto py-8">
          {/* Description Cards */}
          <div className="flex flex-col gap-4 max-w-xl w-full items-center md:items-start">
            {Object.values(aboutContent).map(({ title, content }, index) => {
              const ref = useRef<HTMLDivElement>(null);
              const isInView = useInView(ref, { amount: 0.5 });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  className="p-4 rounded-3xl shadow-lg flexCenter gap-4 items-center bg-gunmetal w-80 md:w-auto"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                  animate={ isMobile ? { opacity: 1, x: 0 } : isInView ? { opacity: 1, x: index === 2 ? -150 : index % 2 === 0 ? 0 : -75 } : {} }
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    bounce: 0.4,
                    duration: 1,
                  }}
                >
                  <p className="text-white text-md md:text-xl font-semibold">{title}</p>
                  <p className="text-white text-sm md:text-md">{content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Interest Section */}
      <div className="bg-gunmetal text-platinum flex flex-col-reverse md:grid md:grid-cols-2" >
          
        {/* Interests */}
        <div className="flex flex-col items-center justify-center py-8 md:py-0 md:gap-10">
          <p className="text-white text-center text-4xl font-semibold mb-4">{t("about_me.interest_title")}</p>
          <div className="grid grid-cols-5 md:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0">
            {interests.map((interest, index) => (
              <div key={index} className="flex flex-col items-center text-platinum">
                <div className="flex items-center justify-center">
                  {interest.icon}
                </div>
                <span className="text-xl mt-1">{interest.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Container */}
        <div className="flex items-center w-full max-w-6xl mx-auto py-8">
          {/* Description Cards */}
          <div className="flex flex-col gap-4 max-w-xl w-full items-center md:items-start">
          {Object.entries(aboutDetails).map(([key, detail], index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { amount: 0.5 });

            return (
              <motion.div
                ref={ref}
                key={key}
                className="p-4 rounded-3xl shadow-lg flexCenter gap-4 items-center bg-platinum text-gunmetal w-80 md:w-auto"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={ isMobile ? { opacity: 1, x: 0 } : isInView ? { opacity: 1, x: index === 2 ? 150 : index % 2 === 0 ? 0 : 75 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.4,
                  duration: 1,
                }}
              >
                <p className="text-charcoal-gray text-md">{detail}</p>
              </motion.div>
            );
          })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
