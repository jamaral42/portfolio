import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import peartreeImage from "../../assets/peartree.jpg";
import milandoneImage from "../../assets/milandone.jpg";
import standardImage from "../../assets/portfolio.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    titleKey: "web_projects.project1.title",
    descriptionKey: "web_projects.project1.description",
    image: peartreeImage,
    link: "https://peartreehandcraft.pt/",
  },
  {
    titleKey: "web_projects.project2.title",
    descriptionKey: "web_projects.project2.description",
    image: milandoneImage,
    link: "https://www.miland1food.com/",
  },
  {
    titleKey: "web_projects.project3.title",
    descriptionKey: "web_projects.project3.description",
    image: standardImage,
    link: "https://www.standardproject.com/",
  },
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute bottom-[-30px] left-[44%] text-gunmetal text-3xl z-20 transition hover:scale-110"
    onClick={onClick}
  >
    <HiOutlineChevronLeft />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute bottom-[-30px] right-[44%] text-gunmetal text-3xl z-20 transition hover:scale-110"
    onClick={onClick}
  >
    <HiOutlineChevronRight />
  </button>
);

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-platinum pt-16 pb-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-mahogany">
        {t("web_projects_title")}
      </h1>

      <div className="relative px-4">
        <Slider {...settings}>
          {projects.map((project) => (
            <motion.div
              key={project.titleKey}
              className="p-4 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-gunmetal rounded-xl flex flex-col items-center overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-60 object-cover mb-4 rounded-t-xl"
                  loading="lazy"
                />
                <h2 className="text-platinum text-xl font-semibold mb-2">
                  {t(project.titleKey)}
                </h2>
                <p className="text-platinum text-sm mb-4">
                  {t(project.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
