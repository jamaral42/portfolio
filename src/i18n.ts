import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      cookies: {
        message: "We use cookies to enhance your experience.",
        accept: "Accept",
        decline: "Decline",
        policy_link: "Read our cookie policy.",
        policy: {
          title: "Cookie Policy",
          intro: "This website uses cookies to enhance user experience and analyze site traffic.",
          whatAreCookies: "What Are Cookies?",
          whatAreCookiesText: "Cookies are small text files stored on your device that help websites function properly.",
          howWeUse: "How We Use Cookies",
          howWeUseText: "We use cookies for website analytics, functionality, and performance improvements.",
          yourChoices: "Your Choices",
          yourChoicesText: "You can manage your cookie preferences in your browser settings.",
          moreInfo: "More Information",
          moreInfoText: "For more details, please contact us.",
          lastUpdated: "Last updated: February 2025",
        },
      },
      header: {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        timeline: "Timeline",
        skills: "Skills",
        projects: "Projects",
        contacts: "Contact",
      },
      hero: {
        first_name: "João",
        last_name: "Amaral",
        title: "Software Engineer",
        downloadCV: "Download CV",
        photo_alt: "My Photo",
      },
      about_me: {
        title: "About Me",
        content: {
          1: {
            title: "Name: ",
            content: "João Miguel Ribeiro de Amaral",
          },
          2: {
            title: "Date of Birth: ",
            content: "1 March 1993",
          },
          3: {
            title: "Nationality: ",
            content: "Portuguese",
          },
          4: {
            title: "Address: ",
            content: "Alcácer do Sal, Portugal",
          },
          5: {
            title: "Email: ",
            content: "joaomramaral42@gmail.com",
          },
        },
        details: {
          1: "I am curious, dedicated, meticulous, and detail-oriented.",
          2: "Part of my professional experience consists of working with raw data to simplify and enrich it, with the purpose of clearly presenting the data and/or improving systems.",
          3: "In this field, I gained good knowledge of technologies like RAID, Oracle SQL, and Excel, as well as tasks involving documentation, presentations, and project planning.",
          4: "I still have a lot of interest in these areas but am exploring less restrictive technologies.",
          5: "Returned to programming, with foundations in C and Java, basics of Python, but now interested in JavaScript and React.",
        },
        interest_title: "My Interests",
        interest: {
            1: "Music",
            2: "Food",
            3: "Sports",
            4: "Puzzles",
            5: "Pins",
        },
      },
      timeline_title: "My Experience",
      timeline_relevant: "Relevant",
      timeline_education: "Education",
      timeline_work: "Work",
      timeline_all: "All",
      timeline_newest: "Latest",
      timeline_oldest: "Oldest",
      timeline: {
        1: {
          date: "2011-2018",
          place: "Instituto Super de Engenharia de Lisboa",
          title: "Bachelor Electronic, Telecommunications, and Computer",
          description: "Degree with the main objective of training engineers capable of competently responding to the challenges posed by the job market in the Information and Communication Technologies sector.",
          main_topics: "Telecomunicações, Programação em C e Java, Lógica Sistemas Digitais, Eletrónica, Matemática e Física",
          important: true,
          study: true,
          work: false,
        },
        2: {
          date: "2018-2018",
          place: "ISEL (Projeto Final Curso)",
          title: "Deteção de sinal em fibra ótica",
          description: "Protótipo criado para ser usado em cassetes de fibra para a NOS. A deteção do sinal ótico é feita através de ligeira dobra da fibra e uso de sensor na orientação certa. Sinal amplificado por Arduíno e transmitido por NFC para smartphone usando App criada para o efeito.",
          main_topics: `Arduino, RFID, NFC, Android Studio`,
          important: true,
          study: true,
          work: false,
        },
        3: {
          date: "2018-2018",
          place: "ISEL (Cadeira de Rádio Comunicações)",
          title: "Programa para análise ligação feixe hertziano entre duas antenas",
          description: `Interface gráfica onde se coloca as informações da ligação hertziana pretendida (potência de emissão, frequência, dados das antenas, distância de ligação, tipo de terreno, pressão atmosférica, humidade entre outros). 
          Com isto as características da ligação são calculadas (potência recebida, atenuações, ganhos, ângulos, divergência e esboço gráfico)`,
          main_topics: `MatLab`,
          important: false,
          study: true,
          work: false,
        },
        4: {
          date: "2017-2017",
          place: "ISEL (Cadeira de Sistemas Operativos)",
          title: "Servidor de notícias ",
          description: `Realizar uma ligação entre vários clientes e um servidor onde os clientes enviam imagens para o servidor e este trata a imagem para que depois seja enviada e broadcast para terminais onde essas imagens serão expostas. Objetivo de criar ligações numa rede TCP/IP entre cliente e servidor e sincronizar as funções para vários clientes usando programas concorrentes em C.`,
          main_topics: `Linux, bash, C, TCP/IP`,
          important: false,
          study: true,
          work: false,
        },
        5: {
          date: "2018-2'18",
          place: "WEDO (Mobileum)",
          title: "Implementação módulo Revenue Assurance",
          description: "Implementação de um módulo de Revenue Assurance para Vodafone Albânia. Consiste na validação das regras de negócio determinantes para o apuramento da renumeração de vendedores de forma a descobrir inconsistências.",
          main_topics: `RAID, Base Dados Oracle, SQL / PL-SQL`,
          important: false,
          study: false,
          work: true,
        },
        6: {
          date: "2023-2025",
          place: "WeDO (Mobileum)",
          title: "Adicionar Portabilidade a UC e PI",
          description: "Implementação de Routing Number para que projetos de Usage Control e Platform Integrity em RAID já implementados para a  Banglalink continuem a funcionar conforme o esperado.",
          main_topics: "RAID, Base Dados Oracle, SQL",
          important: false,
          study: false,
          work: true,
        },
        7: {
            date: "2018-2019",
            place: "WEDO (Mobileum)",
            title: "Interoperabilidade Comissionamento de Portagens",
            description: "Projeto de validação das comissões associadas à portabilidade entre Portugal e Espanha. Protocolo entre Via Verde e concessionárias espanholas para que seja possível circular no país vizinho sem adquirir novos dispositivos.",
            main_topics: "RAID, RAID, Base Dados Oracle, SQL / PL-SQL",
            important: false,
            study: false,
            work: true,
        },
        8: {
          date: "2019-2020",
          place: "WEDO (Mobileum)",
          title: "Migração projeto já implementado de RAID",
          description: "Migração de projeto RAID Incentives Broker, da versão 6 para a 7, usado no comissionamento de vendedores pela NOS.",
          main_topics: "RAID, Base Dados Oracle, SQL / PL-SQL",
          important: false,
          study: false,
          work: true,
        },
        9: {
          date: "2020-2024",
          place: "WEDO (Mobileum)",
          title: "Desenvolvimento de RAID Incentives Broker para a NOS",
          description: "Integrei pequena equipa variando de 2 a 4 pessoas para desenvolver mais de 20 projetos relacionados com incentivos e comissões de vendedores. Praticamente desde o inicio que foi o braço direito da equipa para o desenvolvimento dos projetos e mais para o fim da documentação, deployment, apresentação/passagem de informação para o suporte e alguma levantação de requerimentos para o desenvolvimento dos projetos.", 
          main_topics: "RAID, Oracle SQL / PL-SQL, Excel, Powerpoint, Java, Jira, Agile, Scrum ",
          important: true,
          study: false,
          work: true,
        },
        10: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "The Complete 2023 Web Development Bootcamp",
          description: "The Complete 2023 Web Development Bootcamp - Dr. Angela Yu",
          main_topics: "HTML, CSS, Javascript, React, Node and Web3 development.",
          important: true,
          study: true,
          work: false,
        },
        11: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "100 Days of Code: The Complete Python Pro Bootcamp",
          description: "100 Days of Code: The Complete Python Pro Bootcamp - Dr. Angela Yu",
          main_topics: "Python, Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
          important: false,
          study: true,
          work: false,        
        },
        12: {
          date: "2025-2025",
          place: "Udemy (Online Course)",
          title: "The Project Management Course: Beginner to PROject Manager",
          description: "The Project Management Course: Beginner to PROject Manager - 365 Careers",
          main_topics: "Waterfall , Agile, Scrum and MS Excel",
          important: false,
          study: true,
          work: false,
        },
      },
      skill_title: "Technologies",
      web_projects_title: "Web Projects",
      web_projects: {
        project1: {
          title: "PearTree Handcraft",
          description: "Backend focused",
          link: "https://github.com/JoaoAmaral/pear-tree-handcraft",
        },
        project2: {
          title: "Mil&One",
          description: "Frontend and email automation for a catering company", 
          link: "https://milandone.com",
        },
      },
      contacts: {
      },
      footer: {
        title: "Get in Touch",
        text: "Developed and Designed by João Amaral",
        downloadCV: "Download CV",
      },
    }
  },
  pt: {
    translation: {
      cookies: {
        message: "Usamos cookies para melhorar sua experiência.",
        accept: "Aceitar",
        decline: "Rejeitar",
        policy_link: "Leia nossa política de cookies.",
        policy: {
          title: "Política de Cookies",
          intro: "Este site utiliza cookies para melhorar a experiência do usuário e analisar o tráfego do site.",
          whatAreCookies: "O que são Cookies?",
          whatAreCookiesText: "Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam os sites a funcionarem corretamente.",
          howWeUse: "Como Usamos Cookies",
          howWeUseText: "Usamos cookies para análises do site, funcionalidades e melhorias de desempenho.",
          yourChoices: "Suas Escolhas",
          yourChoicesText: "Você pode gerenciar suas preferências de cookies nas configurações do navegador.",
          moreInfo: "Mais Informações",
          moreInfoText: "Para mais detalhes, entre em contato conosco.",
          lastUpdated: "Última atualização: Fevereiro de 2025",
        },
      },
      header: {
        top: "Top",
        about: "About",
        portfolio: "Portfolio",
        timeline: "Timeline",
        skills: "Skills",
        projects: "Projects",
        contacts: "Contact",
      },
      hero: {
        first_name: "João",
        last_name: "Amaral",
        title: "Software Engineer",
        downloadCV: "Download CV",
        photo_alt: "My Photo",
      },
      about_me: {
        title: "About Me",
        content: {
          1: {
            title: "Name: ",
            content: "João Miguel Ribeiro de Amaral",
          },
          2: {
            title: "Date of Birth: ",
            content: "1 March 1993",
          },
          3: {
            title: "Nationality: ",
            content: "Portuguese",
          },
          4: {
            title: "Address: ",
            content: "Alcácer do Sal, Portugal",
          },
          5: {
            title: "Email: ",
            content: "joaomramaral42@gmail.com",
          },
        },
        details: {
          1: "I am curious, dedicated, meticulous, and detail-oriented.",
          2: "Part of my professional experience consists of working with raw data to simplify and enrich it, with the purpose of clearly presenting the data and/or improving systems.",
          3: "In this field, I gained good knowledge of technologies like RAID, Oracle SQL, and Excel, as well as tasks involving documentation, presentations, and project planning.",
          4: "I still have a lot of interest in these areas but am exploring less restrictive technologies.",
          5: "Returned to programming, with foundations in C and Java, basics of Python, but now interested in JavaScript and React.",
        },
        interest_title: "My Interests",
        interest: {
            1: "Music",
            2: "Food",
            3: "Sports",
            4: "Puzzles",
            5: "Pins",
        },
      },
      timeline_title: "My Experience",
      timeline_relevant: "Relevant",
      timeline_education: "Education",
      timeline_work: "Work",
      timeline_all: "All",
      timeline_newest: "Latest",
      timeline_oldest: "Oldest",
      timeline: {
        1: {
          date: "2011-2018",
          place: "Instituto Super de Engenharia de Lisboa",
          title: "Bachelor Electronic, Telecommunications, and Computer",
          description: "Degree with the main objective of training engineers capable of competently responding to the challenges posed by the job market in the Information and Communication Technologies sector.",
          main_topics: "Telecomunicações, Programação em C e Java, Lógica Sistemas Digitais, Eletrónica, Matemática e Física",
          important: true,
          study: true,
          work: false,
        },
        2: {
          date: "2018-2018",
          place: "ISEL (Projeto Final Curso)",
          title: "Deteção de sinal em fibra ótica",
          description: "Protótipo criado para ser usado em cassetes de fibra para a NOS. A deteção do sinal ótico é feita através de ligeira dobra da fibra e uso de sensor na orientação certa. Sinal amplificado por Arduíno e transmitido por NFC para smartphone usando App criada para o efeito.",
          main_topics: `Arduino, RFID, NFC, Android Studio`,
          important: true,
          study: true,
          work: false,
        },
        3: {
          date: "2018-2018",
          place: "ISEL (Cadeira de Rádio Comunicações)",
          title: "Programa para análise ligação feixe hertziano entre duas antenas",
          description: `Interface gráfica onde se coloca as informações da ligação hertziana pretendida (potência de emissão, frequência, dados das antenas, distância de ligação, tipo de terreno, pressão atmosférica, humidade entre outros). 
          Com isto as características da ligação são calculadas (potência recebida, atenuações, ganhos, ângulos, divergência e esboço gráfico)`,
          main_topics: `MatLab`,
          important: false,
          study: true,
          work: false,
        },
        4: {
          date: "2017-2017",
          place: "ISEL (Cadeira de Sistemas Operativos)",
          title: "Servidor de notícias ",
          description: `Realizar uma ligação entre vários clientes e um servidor onde os clientes enviam imagens para o servidor e este trata a imagem para que depois seja enviada e broadcast para terminais onde essas imagens serão expostas. Objetivo de criar ligações numa rede TCP/IP entre cliente e servidor e sincronizar as funções para vários clientes usando programas concorrentes em C.`,
          main_topics: `Linux, bash, C, TCP/IP`,
          important: false,
          study: true,
          work: false,
        },
        5: {
          date: "2018-2'18",
          place: "WEDO (Mobileum)",
          title: "Implementação módulo Revenue Assurance",
          description: "Implementação de um módulo de Revenue Assurance para Vodafone Albânia. Consiste na validação das regras de negócio determinantes para o apuramento da renumeração de vendedores de forma a descobrir inconsistências.",
          main_topics: `RAID, Base Dados Oracle, SQL / PL-SQL`,
          important: false,
          study: false,
          work: true,
        },
        6: {
          date: "2023-2025",
          place: "WeDO (Mobileum)",
          title: "Adicionar Portabilidade a UC e PI",
          description: "Implementação de Routing Number para que projetos de Usage Control e Platform Integrity em RAID já implementados para a  Banglalink continuem a funcionar conforme o esperado.",
          main_topics: "RAID, Base Dados Oracle, SQL",
          important: false,
          study: false,
          work: true,
        },
        7: {
            date: "2018-2019",
            place: "WEDO (Mobileum)",
            title: "Interoperabilidade Comissionamento de Portagens",
            description: "Projeto de validação das comissões associadas à portabilidade entre Portugal e Espanha. Protocolo entre Via Verde e concessionárias espanholas para que seja possível circular no país vizinho sem adquirir novos dispositivos.",
            main_topics: "RAID, RAID, Base Dados Oracle, SQL / PL-SQL",
            important: false,
            study: false,
            work: true,
        },
        8: {
          date: "2019-2020",
          place: "WEDO (Mobileum)",
          title: "Migração projeto já implementado de RAID",
          description: "Migração de projeto RAID Incentives Broker, da versão 6 para a 7, usado no comissionamento de vendedores pela NOS.",
          main_topics: "RAID, Base Dados Oracle, SQL / PL-SQL",
          important: false,
          study: false,
          work: true,
        },
        9: {
          date: "2020-2024",
          place: "WEDO (Mobileum)",
          title: "Desenvolvimento de RAID Incentives Broker para a NOS",
          description: "Integrei pequena equipa variando de 2 a 4 pessoas para desenvolver mais de 20 projetos relacionados com incentivos e comissões de vendedores. Praticamente desde o inicio que foi o braço direito da equipa para o desenvolvimento dos projetos e mais para o fim da documentação, deployment, apresentação/passagem de informação para o suporte e alguma levantação de requerimentos para o desenvolvimento dos projetos.", 
          main_topics: "RAID, Oracle SQL / PL-SQL, Excel, Powerpoint, Java, Jira, Agile, Scrum ",
          important: true,
          study: false,
          work: true,
        },
        10: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "The Complete 2023 Web Development Bootcamp",
          description: "The Complete 2023 Web Development Bootcamp - Dr. Angela Yu",
          main_topics: "HTML, CSS, Javascript, React, Node and Web3 development.",
          important: true,
          study: true,
          work: false,
        },
        11: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "100 Days of Code: The Complete Python Pro Bootcamp",
          description: "100 Days of Code: The Complete Python Pro Bootcamp - Dr. Angela Yu",
          main_topics: "Python, Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
          important: false,
          study: true,
          work: false,        
        },
        12: {
          date: "2025-2025",
          place: "Udemy (Online Course)",
          title: "The Project Management Course: Beginner to PROject Manager",
          description: "The Project Management Course: Beginner to PROject Manager - 365 Careers",
          main_topics: "Waterfall , Agile, Scrum and MS Excel",
          important: false,
          study: true,
          work: false,
        },
      },
      skill_title: "Technologies",
      web_projects_title: "Web Projects",
      web_projects: {
        project1: {
          title: "Portfolio",
          description: "Meh",
          link: "https://jamaral42.github.io/portfolio/",
        },
        project2: {
          title: "Mil&Peartree",
          description: "Backend focused", 
          link: "https://jamaral42.github.io/portfolio/",
        },
        project3: {
          title: "Mil&One",
          description: "Frontend and email automation for a catering company", 
          link: "https://milandone.com",
        },        
      },
      contacts: {
      },
      footer: {
        title: "Get in Touch",
        text: "Developed and Designed by João Amaral",
        downloadCV: "Download CV",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "pt", // Ensure consistency with LanguageSwitcher
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
  });

// Ensure the language change persists in localStorage
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;
