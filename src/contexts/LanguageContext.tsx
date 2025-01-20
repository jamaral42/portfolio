import React, { createContext, useContext, useState, useEffect } from "react";
import portfolioImageEn from "../assets/portfolio_en.jpg";
import portfolioImagePt from "../assets/portfolio_pt.jpg";
import peartreeImage from "../assets/peartree.jpg";

type Language = "en" | "pt";

const translations = {
  en: {
    hero_greeting: "Hello, I am",
    hero_name: "João Amaral",
    hero_about: `I have a degree in Electronic, Telecommunications, and Computer Engineering from ISEL, where I built a solid foundation in systems design, programming, and problem-solving.

    My professional journey began in the telecommunications industry, where I worked with RAID, a low-code platform by Mobileum (created by WeDo Technologies). My main focus was on revenue assurance and commissions, ensuring accurate and efficient financial operations for telecom providers.

    Currently, I have transitioned to web development, still without professional experience in this area, but I have been working on personal applications and continue to develop more projects.`,

    hero_downloadCV: "Download CV",
    hero_exploreMore: "Explore More",

    about_me_title: "About Me",
																																																																													  

    about_me_description: `I am curious, dedicated, meticulous, and detail-oriented.
						   

    Part of my professional experience consists of working with raw data to simplify and enrich it, with the purpose of clearly presenting the data and/or improving systems.
    In this field, I gained good knowledge of technologies like RAID, Oracle SQL, and Excel, as well as tasks involving documentation, presentations, and project planning.

    I still have a lot of interest in these areas but am exploring less restrictive technologies.

    I returned to programming, where I already had foundations in C and Java, learned the basics of Python, but it was JavaScript and React that I enjoyed the most and have been working on.`,

    skills_title: "Technologies",

    projects_title: "Projects",
    projects_list: [
      {
        title: "Portfolio",
        description: "A portfolio showcasing some of my projects and knowledge.",
        image: portfolioImageEn,
        link: "https://jamaral42.github.io/portfolio/",
      },
      {
        title: "PearTree Handcraft",
        description: "An e-commerce solution for a small candle and artisanal decor business.",
        image: peartreeImage,
        link: "https://peartreehandcraft.pt/",
      },
    ],

    footer_title: "Contacts",
    footer_text: "Developed and Designed by João Amaral.",
  },

  pt: {
    hero_greeting: "Olá, eu sou",
    hero_name: "João Amaral",
    hero_about: `Tenho uma licenciatura em Engenharia Eletrónica, Telecomunicações e Computadores pelo ISEL, onde construí uma base sólida em design de sistemas, programação e resolução de problemas.

    A minha jornada profissional começou na indústria de telecomunicações, onde trabalhei com o RAID, uma plataforma low-code da Mobileum (criado pela WeDo Technologies). O meu foco principal foi em revenue assurance e comissões, assegurando operações financeiras precisas e eficientes para fornecedores de telecomunicações.

    Atualmente, transitei para o desenvolvimento web, ainda sem experiencia empresarial, mas aproveitei para desenvolver aplicações pessoais e continuo a desenvolver mais projetos.`,

    hero_downloadCV: "Download CV",
    
    hero_exploreMore: "Explorar Mais",
   
    about_me_title: "Sobre Mim",

    about_me_description: `Sou curioso, empenhado, minucioso e atento a pormenores.
    
    Parte da minha experiencia profissional consiste em trabalhar dados em bruto para simplificar e enriquecer com a finalidade de demonstrar os mesmos de forma clara e/ou melhorar sistemas. 
    Neste ramo ganhei bons conhecimentos em tecnologias como RAID, Oracle SQL e Excel e em tarefas de documentação, apresentação e planeamento de projetos.

    Continuo a ter bastante interesse nestas áreas mas estou a explorar tecnologias menos restritivas. 

    Voltei à programação, onde já tinha bases em C e Java, aprendi as bases em Python mas foi JavaScript e React que mais gostei e nas quais estou a trabalhar.`,

    skills_title: "Tecnologias",
  
    projects_title: "Projetos",
    projects_list: [
      {
        title: "Portfolio",
        description: "Portfolio a demonstrar alguns dos meus projetos e conhecimentos.",
        image: portfolioImagePt,
        link: "https://jamaral42.github.io/portfolio/",
      },
      {
        title: "PearTree Handcraft",
        description: "Uma solução de e-commerce uma pequena empresa de velas e pecas artesanais.",
        image: peartreeImage,
        link: "https://peartreehandcraft.pt/",
      },
    ],
    footer_title: "Contatos",
    footer_text: "Desenvolvido e Projetado por João Amaral.",
  },
};

const LanguageContext = createContext<{
  currentLanguage: Language;
  translations: typeof translations["en"];
  switchLanguage: (lang: Language) => void;
}>({
  currentLanguage: "en",
  translations: translations.en,
  switchLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || "en"; // Default to "en" if no preference is saved
  });

  const switchLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang); // Save preference to localStorage
  };

  useEffect(() => {
    // Sync state with localStorage on mount
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        translations: translations[currentLanguage],
        switchLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);