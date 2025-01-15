import React, { createContext, useContext, useState, useEffect } from "react";
import portfolioImage from "../assets/portfolio.jpg";
import peartreeImage from "../assets/peartree.jpg";

type Language = "en" | "pt";

const translations = {
  en: {
    hero_greeting: "Hello, I am",
    hero_name: "João Amaral",
    hero_about: `I hold a Bachelor's degree in Electronic, Telecommunications, and Computer Engineering from ISEL, where I built a strong foundation in systems design, programming, and problem-solving.

    My professional journey began in the telecommunications industry, where I worked with RAID, a low-code platform by Mobileum. My primary focus was on revenue assurance, ensuring accurate and efficient financial operations for telecom providers.

    Currently, I’ve transitioned into the dynamic world of web development, where I apply my technical expertise to create user-centric applications and scalable digital solutions.`,
    hero_downloadCV: "Download CV", 
    hero_exploreMore: "Explore More",
   
    about_me_title: "About Me",
    about_me_description: `Hello! I’m a curious and creative Web Developer who loves turning ideas into functional, visually appealing digital experiences. With a background in engineering and telecommunications, I bring a unique perspective to my work, combining technical precision with a flair for design.

    When I’m not coding, you’ll find me exploring the latest tech trends, diving into challenging problems, or brainstorming innovative ways to enhance user experiences. I thrive on learning and continuously improving, always aiming to make a meaningful impact through my work.`,
    skills_title: "Skills",

    projects_title: "Projects",
    projects_list: [
      {
        title: "Portfolio",
        description: "A responsive portfolio showcasing my work.",
        image: portfolioImage,
        link: "http://localhost:5173/",
      },
      {
        title: "PearTree Handcraft",
        description: "A scalable e-commerce solution for small businesses.",
        image: peartreeImage,
        link: "https://peartreehandcraft.pt/",
      },
    ],
    footer_title: "Contacts",
    footer_text: "Developed & Designed by João Amaral.",
  },

  pt: {
    hero_greeting: "Olá, eu sou",
    hero_name: "João Amaral",
    hero_about: `Tenho uma licenciatura em Engenharia Eletrónica, Telecomunicações e Computadores pelo ISEL, onde construí uma base sólida em design de sistemas, programação e resolução de problemas.

    A minha jornada profissional começou na indústria de telecomunicações, onde trabalhei com o RAID, uma plataforma low-code da Mobileum. O meu foco principal foi na garantia de receita, assegurando operações financeiras precisas e eficientes para os fornecedores de telecomunicações.

    Atualmente, transitei para o dinâmico mundo do desenvolvimento web, onde aplico a minha experiência técnica para criar aplicações centradas no utilizador e soluções digitais escaláveis.`,
    hero_downloadCV: "Download CV",
    hero_exploreMore: "Explorar Mais",
   
    about_me_title: "Sobre Mim",
    about_me_description: `Olá! Sou um Desenvolvedor Web curioso e criativo que adora transformar ideias em experiências digitais funcionais e visualmente atraentes. Com um background em engenharia e telecomunicações, trago uma perspectiva única para o meu trabalho, combinando precisão técnica com um toque de design.

    Quando não estou programando, você me encontrará explorando as últimas tendências tecnológicas, enfrentando desafios complexos ou brainstormando maneiras inovadoras de melhorar as experiências dos usuários. Eu prospero em aprender e melhorar continuamente, sempre buscando causar um impacto significativo através do meu trabalho.`,
    skills_title: "Tecnologias",
  
    projects_title: "Projetos",
    projects_list: [
      {
        title: "Portfolio",
        description: "Um portfólio responsivo mostrando o meu trabalho.",
        image: portfolioImage,
        link: "http://localhost:5173/",
      },
      {
        title: "PearTree Handcraft",
        description: "Uma solução de e-commerce escalável para pequenas empresas.",
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