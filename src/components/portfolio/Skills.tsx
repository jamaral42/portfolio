import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import vite from "../../assets/vite.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import excel from "../../assets/excel.png";
import oracle from "../../assets/oracle.png";
import typeScript from "../../assets/ts.png";
import figmaImg from "../../assets/figma.png";

type SkillsProps = {
  isMobile: boolean;
};

const skills = [
  { image: html, nameKey: "HTML", level: 90 },
  { image: css, nameKey: "CSS", level: 85 },
  { image: js, nameKey: "JavaScript", level: 80 },
  { image: vite, nameKey: "Vite", level: 70 },
  { image: react, nameKey: "React", level: 85 },
  { image: tailwind, nameKey: "TailwindCSS", level: 90 },
  { image: excel, nameKey: "Excel", level: 75 },
  { image: oracle, nameKey: "Oracle DB", level: 65 },
  { image: typeScript, nameKey: "TypeScript", level: 55 },
  { image: figmaImg, nameKey: "Figma", level: 50 },
];

const Skills: React.FC<SkillsProps> = ({ isMobile }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative bg-gunmetal text-platinum p-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold my-10 text-mahogany">{t("skill_title")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12  w-full">
            {skills.map((skill, index) => {
              // Randomize initial X and Y values for the icon
              const randomX = (Math.random() - 0.5) * (isMobile ? 200 : 500);
              const randomY = (Math.random() - 0.5) * (isMobile ? 200 : 500);

              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  {/* AnimatePresence ensures exit animations work */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={index}
                      src={skill.image}
                      alt={skill.nameKey}
                      className="size-8 md:size-15 object-cover rounded-full"
                      initial={{ opacity: 0, x: randomX, y: randomY }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, x: randomX, y: randomY }}
                      viewport={{ amount: 0.5 }}
                      transition={{ duration: 1.5 }}
                    />
                  </AnimatePresence>

                  {/* Name & Progress Bar */}
                  <div className="w-full">
                    <p className="text-lg font-semibold">{skill.nameKey}</p>

                    <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                      <motion.div
                        className="bg-tiffany-blue h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.2, delay: index * 0.2 }}
                      />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
