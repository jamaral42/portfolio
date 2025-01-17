import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Projects: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="bg-ivory py-10">
      <div className="max-padd-container text-center">
        <h1 className="text-3xl font-bold mb-6 text-mahogany">{translations.projects_title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {translations.projects_list.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-mahogany shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={`${300 * (index + 1)}`}
            >
              <div className="relative w-full h-4/6 overflow-hidden border-b-4 border-mahogany">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2 md:p-4 bg-white h-2/6">
                <h2 className="text-base md:text-xl font-bold text-mahogany mb-1 md:mb-2">{project.title}</h2>
                <p className="text-xs md:text-sm text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
