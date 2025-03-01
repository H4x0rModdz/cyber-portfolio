import projectsEn from '@/data/projects_en.json';
import projectsPt from '@/data/projects_pt.json';
import reviewsEn from '@/data/reviews_en.json';
import reviewsPt from '@/data/reviews_pt.json';

export const translations = {
  en: {
    title: "Lucas Lobo | Software Engineer",
    description: "Lucas Lobo | Software Engineer",
    nav: {
      about: "About Me",
      workExperience: "Work Experience",
      works: "Works",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      subtitle:
        "I'm Lucas, a developer with over 3+ years of experience, passionate about building innovative and scalable solutions. I'm the CEO of Red-Shark, an open-source social media platform designed to prioritize user privacy, security, and community-driven development.",
    },
    experience: {
      title: "Work Experience",
      downloadFullCV: "Download Full CV",
      talk: "Let's talk!",
      workWithMe: "Would you like to work with me?",
    },
    works: {
      title: "Projects I've Worked On",
    },
    reviews: {
      title: "What My Clients and Peers Say About Me",
      defaultText: "User didn't leave a comment, but their rating speaks for itself!",
    },
    contact: {
      title: "Want to add or remove a review? Send me an email",
      email: "E-mail: lucasbg.lobo@gmail.com",
    },
    animatedText: ["Software Engineer", "Full Stack Developer"],
    projects: projectsEn,
    reviewsSection: reviewsEn,
  },
  pt: {
    title: "Lucas Lobo | Engenheiro de Software",
    description: "Lucas Lobo | Engenheiro de Software",
    nav: {
      about: "Sobre Mim",
      workExperience: "Experiência Profissional",
      works: "Trabalhos",
      contact: "Contato",
      downloadCV: "Baixar CV",
    },
    hero: {
      subtitle:
        "Sou Lucas, um desenvolvedor com mais de 3 anos de experiência, apaixonado por criar soluções inovadoras e escaláveis. Sou o CEO da Red-Shark, uma plataforma de mídia social de código aberto projetada para priorizar a privacidade do usuário, segurança e desenvolvimento guiado pela comunidade.",
    },
    experience: {
      title: "Experiência Profissional",
      downloadFullCV: "Baixar CV Completo",
      talk: "Vamos conversar!",
      workWithMe: "Gostaria de trabalhar comigo?",
    },
    works: {
      title: "Projetos em que Trabalhei",
    },
    reviews: {
      title: "O que Meus Clientes e Colegas Dizem Sobre Mim",
      defaultText: "O usuário não deixou um comentário, mas sua avaliação fala por si só!",
    },
    contact: {
      title: "Quer adicionar ou remover uma avaliação? Envie-me um e-mail",
      email: "E-mail: lucasbg.lobo@gmail.com",
    },
    animatedText: ["Engenheiro de Software", "Desenvolvedor Full Stack"],
    projects: projectsPt,
    reviewsSection: reviewsPt,
  },
};
