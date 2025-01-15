import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Projects: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section className="bg-ivory py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold mb-8 text-mahogany">{translations.projects_title}</h1>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
        {translations.projects_list.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-mahogany shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer block"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={`${300 * (index + 1)}`}
          >
            {/* Project Image */}
            <div className="relative w-full h-60 overflow-hidden border-b-4 border-mahogany">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 bg-white flex flex-col">
              <h2 className="text-2xl font-bold text-mahogany mb-3">{project.title}</h2>
              <p className="text-gray-600 text-md">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
