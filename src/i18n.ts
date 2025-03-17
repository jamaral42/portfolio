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
          1: "I am curious, dedicated, and detail-oriented.",
          2: "My professional experience consists of working with raw data to simplify and enrich it, with the purpose of clearly presenting the data and/or improving systems.",
          3: "In this field, I gained good knowledge of technologies like RAID, Oracle SQL, and Excel, as well as tasks involving documentation, presentations, and project planning.",
          4: "I still have a lot of interest in these areas but am exploring less restrictive technologies.",
          5: "Learned programming in 2011 with C and Java, now focused in web development, FrontEnd and BackEnd.",
        },
        interest_title: "My Interests",
        interest: {
            music: "Music",
            food: "Food",
            sports: "Sports",
            puzzles: "Puzzles",
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
          title: "Bachelor's Degree in Electronic, Telecommunications and Computer Engineering",
          description: "Bachelor's degree with the main objective of training engineers capable of responding to the challenges posed by the job market in the Information and Communication Technologies sector.",
          main_topics: "Telecommunications, Programming in C and Java, Digital Systems Logic, Electronics, Probability, Statistics, Mathematics, Physics, among others.",
          important: true,
          study: true,
          work: false,
        },
        2: {
          date: "2017-2017",
          place: "ISEL (Operating Systems Course)",
          title: "News Server",
          description: `Establish a connection between multiple clients and a server where clients send images to the server, which processes the image and then broadcasts it to terminals where these images will be displayed. The objective is to create connections in a TCP/IP network between client and server and synchronize functions for multiple clients using concurrent programs in C.`,
          main_topics: `Linux, bash, C, TCP/IP`,
          important: false,
          study: true,
          work: false,
        },
        3: {
          date: "2018-2018",
          place: "ISEL (Radio Communications Course)",
          title: "Program to analyze hertzian waves between two antennas",
          description: `Graphical interface where the desired hertzian wave information is entered (transmission power, frequency, antenna data, link distance, terrain type, atmospheric pressure, humidity, among others).
          With this, the link characteristics are calculated (received power, attenuations, gains, angles, divergence, and graphical sketch).`,
          main_topics: `MatLab`,
          important: false,
          study: true,
          work: false,
        },
        4: {
          date: "2018-2018",
          place: "ISEL (Final Course Project)",
          title: "Optical Fiber Signal Detection",
          description: "Prototype created for use in fiber cassettes for NOS. Optical signal detection is done through a slight bend in the fiber and the use of a sensor in the correct orientation. Signal amplified by Arduino and transmitted via NFC to a smartphone using an app created for this purpose.",
          main_topics: `Arduino, RFID, NFC, Android Studio`,
          important: true,
          study: true,
          work: false,
        },
        5: {
          date: "2018-2018",
          place: "WEDO (Mobileum)",
          title: "Implementation of Revenue Assurance Module",
          description: "Implementation of a Revenue Assurance module for Vodafone Albania. It consists of validating key business rules for determining vendor remuneration and to identify inconsistencies.",
          main_topics: `RAID, Oracle Database, SQL / PL-SQL`,
          important: false,
          study: false,
          work: true,
        },
        6: {
          date: "2018-2018",
          place: "WeDO (Mobileum)",
          title: "Adding Portability to UC and PI",
          description: "Implementation of Routing Number so that the Usage Control and Platform Integrity projects in RAID, already implemented for Banglalink, continue to function as expected.",
          main_topics: "RAID, Oracle Database, SQL",
          important: false,
          study: false,
          work: true,
        },
        7: {
          date: "2018-2019",
          place: "WEDO (Mobileum)",
          title: "Interoperability of Toll Commissioning",
          description: "Project for validating commissions associated with portability between Portugal and Spain. Protocol between Via Verde and Spanish concessionaires to enable travel in the neighboring country without acquiring new devices.",
          main_topics: "RAID, Oracle Database, SQL / PL-SQL",
          important: false,
          study: false,
          work: true,
        },
        8: {
          date: "2019-2020",
          place: "WEDO (Mobileum)",
          title: "Migration of an Already Implemented RAID Project",
          description: "Migration of the RAID Incentives Broker project from version 6 to 7, used in vendor commission processing for NOS.",
          main_topics: "RAID, Oracle Database, SQL / PL-SQL",
          important: false,
          study: false,
          work: true,
        },
        9: {
          date: "2020-2024",
          place: "WEDO (Mobileum)",
          title: "Development of RAID Incentives Broker for NOS",
          description: "I was part of a small team ranging from 2 to 4 people, developing over 20 projects related to incentives and vendor commissions. Early on I adquired a lot of autonomy and responsability in the development, and later on in the documentation, deployment, presentations, knowledge transfer to support teams, and some requirement gathering for project development.",
          main_topics: "RAID, Oracle SQL / PL-SQL, Excel, PowerPoint, Java, Jira, Agile, Scrum",
          important: true,
          study: false,
          work: true,
        },
        10: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "100 Days of Code: The Complete Python Pro Bootcamp",
          description: "100 Days of Code: The Complete Python Pro Bootcamp - Dr. Angela Yu",
          main_topics: "Python, Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
          important: false,
          study: true,
          work: false,        
        },
        11: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "The Complete 2023 Web Development Bootcamp",
          description: "The Complete 2023 Web Development Bootcamp - Dr. Angela Yu",
          main_topics: "HTML, CSS, JavaScript, React, Node and Web3.",
          important: true,
          study: true,
          work: false,
        },
        12: {
          date: "2025-2025",
          place: "Udemy (Online Course)",
          title: "The Project Management Course: Beginner to PROject Manager",
          description: "The Project Management Course: Beginner to PROject Manager - 365 Careers",
          main_topics: "Waterfall, Agile, Scrum and MS Excel",
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
          description: "An introduction to myself, my path, and my projects",
          link: "https://joaomramaral.com",
        },
        project2: {
          title: "PearTree Handcraft",
          description: `My first full-stack project, developed with the PERN stack.
          Focused on the backend handling users, orders, and feedback. Implemented email automation for orders, registrations, and password resets.
          Also developed a hidden management panel for the admin with all the necessary features.`,
          link: "https://peartreehandcraft.pt",
        },
        project3: {
          title: "Mil&One",
          description: "In development: Frontend and email automation for a catering company",
          link: "https://www.miland1food.com",
        },        
      },
      footer: {
        title: "Get in Touch",
        text: "Developed and Designed by João Amaral",
        downloadCV: "Download CV",
      },
    },  
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
      hero: {
        first_name: "João",
        last_name: "Amaral",
        title: "Engenheiro de Software",
        downloadCV: "Download CV",
        photo_alt: "Minha Foto",
      },
      about_me: {
        title: "Sobre Mim",
        content: {
          1: {
            title: "Nome: ",
            content: "João Miguel Ribeiro de Amaral",
          },
          2: {
            title: "Data de Nascimento: ",
            content: "1 Março 1993",
          },
          3: {
            title: "Nacionalidade: ",
            content: "Portuguesa",
          },
          4: {
            title: "Localidade: ",
            content: "Alcácer do Sal, Portugal",
          },
          5: {
            title: "Email: ",
            content: "joaomramaral42@gmail.com",
          },
        },
        details: {
          1: "Curioso, dedicado e atento ao detalhe.",
          2: "Experiência profissional em análise e tratamento de dados com o objetivo de os apresentar e/ou melhorar sistemas.",
          3: "Nesta área, adquiri bons conhecimentos sobre tecnologias como RAID, Oracle SQL e Excel, bem como tarefas envolvendo documentação, apresentações e planeamento de projetos.",
          4: "Ainda tenho muita interesse nestes áreas, mas estou a explorar tecnologias menos restritivas.",
          5: "Aprendi programação em 2011 em C e Java mas estou neste momento focado em web development tanto FrontEnd quanto BackEnd.",
        },
        interest_title: "Interesses",
        interest: {
            music: "Música",
            food: "Comida",
            sports: "Desporto",
            puzzles: "Puzzles",
        },
      },
      timeline_title: "A minha experiência",
      timeline_relevant: "Relevante",
      timeline_education: "Educação",
      timeline_work: "Trabalho",
      timeline_all: "Todos",
      timeline_newest: "Mais recente",
      timeline_oldest: "Mais antigo",
      timeline: {
        1: {
          date: "2011-2018",
          place: "Instituto Super de Engenharia de Lisboa",
          title: "Licenciatura Engenharia Eletrónica, Telecomunicações e Computadores",
          description: "Licenciatura com o objetivo principal de formar engenheiros aptos a responder com competência aos desafios colocados pelo mercado de trabalho no sector das Tecnologias de Informação e Comunicação.",
          main_topics: "Telecomunicações, Programação em C e Java, Lógica Sistemas Digitais, Eletrónica, Probabilidade, Estatística, Matemática, Física, entre outros.",
          important: true,
          study: true,
          work: false,
        },
        2: {
          date: "2017-2017",
          place: "ISEL (Cadeira de Sistemas Operativos)",
          title: "Servidor de notícias ",
          description: `Realizar uma ligação entre vários clientes e um servidor onde os clientes enviam imagens para o servidor e este trata a imagem para que depois seja enviada e broadcast para terminais onde essas imagens serão expostas. Objetivo de criar ligações numa rede TCP/IP entre cliente e servidor e sincronizar as funções para vários clientes usando programas concorrentes em C.`,
          main_topics: `Linux, bash, C, TCP/IP`,
          important: false,
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
          date: "2018-2018",
          place: "ISEL (Projeto Final Curso)",
          title: "Deteção de sinal em fibra ótica",
          description: "Protótipo criado para ser usado em cassetes de fibra para a NOS. A deteção do sinal ótico é feita através de ligeira dobra da fibra e uso de sensor na orientação certa. Sinal amplificado por Arduíno e transmitido por NFC para smartphone usando App criada para o efeito.",
          main_topics: `Arduino, RFID, NFC, Android Studio`,
          important: true,
          study: true,
          work: false,
        },
        5: {
          date: "2018-2018",
          place: "WEDO (Mobileum)",
          title: "Implementação módulo Revenue Assurance",
          description: "Implementação de um módulo de Revenue Assurance para Vodafone Albânia. Consiste na validação das regras de negócio determinantes para o apuramento da renumeração de vendedores de forma a descobrir inconsistências.",
          main_topics: `RAID, Base Dados Oracle, SQL / PL-SQL`,
          important: false,
          study: false,
          work: true,
        },
        6: {
          date: "2018-2018",
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
          description: "Integrei pequena equipa variando de 2 a 4 pessoas para desenvolver mais de 20 projetos relacionados com incentivos e comissões de vendedores. Desde o inicio que obti bastante autonomi e responsabiliade no desenvolvimento dos projetos e mais tarde na documentação, deployment, apresentação/passagem de informação para o suporte e alguma levantação de requerimentos para o desenvolvimento dos projetos.", 
          main_topics: "RAID, Oracle SQL / PL-SQL, Excel, Powerpoint, Java, Jira, Agile, Scrum ",
          important: true,
          study: false,
          work: true,
        },
        10: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "100 Days of Code: The Complete Python Pro Bootcamp",
          description: "100 Days of Code: The Complete Python Pro Bootcamp - Dr. Angela Yu",
          main_topics: "Python, Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.",
          important: false,
          study: true,
          work: false,        
        },
        11: {
          date: "2024-2024",
          place: "Udemy (Online Course)",
          title: "The Complete 2023 Web Development Bootcamp",
          description: "The Complete 2023 Web Development Bootcamp - Dr. Angela Yu",
          main_topics: "HTML, CSS, JavaScript, React, Node and Web3.",
          important: true,
          study: true,
          work: false,
        },
        12: {
          date: "2025-2025",
          place: "Udemy (Online Course)",
          title: "The Project Management Course: Beginner to PROject Manager",
          description: "The Project Management Course: Beginner to PROject Manager - 365 Careers",
          main_topics: "Waterfall, Agile, Scrum and MS Excel",
          important: false,
          study: true,
          work: false,
        },

      },
      skill_title: "Tecnologias",
      web_projects_title: "Projetos Web",
      web_projects: {
        project1: {
          title: "Portfólio",
          description: "Introdução sobre mim, o meu percurso e os meus projetos",
          link: "https://joaomramaral.com",
        },
        project2: {
          title: "PearTree Handcraft",
          description: `Meu primeiro projeto full-stack, desenvolvido com a stack PERN.
          Focado no backend para gerir utilizadores, encomendas e feedbacks. Implementei automação de emails para encomendas, registos e recuperação de password.
          Também desenvolvi um painel de gestão oculto com todas as funcionalidades necessárias.`,
          link: "https://peartreehandcraft.pt",
        },
        project3: {
          title: "Mil&One",
          description: "Em desenvolvimento: Frontend e automação de emails para uma empresa de catering",
          link: "https://www.miland1food.com",
        },        
      },
      footer: {
        title: "Entre em Contato",
        text: "Desenvolvido e Desenhado por João Amaral",
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
