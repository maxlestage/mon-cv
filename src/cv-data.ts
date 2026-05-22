import type { CVData, UIStrings } from "./types";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  ÉDITE CE FICHIER POUR PERSONNALISER TON CV                       ║
 * ║  Chaque texte a une version { fr: "...", en: "..." }.            ║
 * ║  Aucune autre modification du code n'est nécessaire.            ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */
export const cvData: CVData = {
  name: "Maxime Lestage",

  // Dépose ta photo dans le dossier /public sous ce nom (ou change le nom ici).
  photo: "profile.jpg",

  title: {
    fr: "Ingénieur logiciel",
    en: "Software Engineer",
  },

  summary: {
    fr: "Ingénieur logiciel passionné par les nouvelles technologies. J'aime concevoir des applications web et mobiles, du back-end au front-end. Technologies de prédilection : Rust, Node.js, React.js.",
    en: "Software engineer passionate about new technologies. I enjoy building web and mobile applications, from back-end to front-end. Favorite stack: Rust, Node.js, React.js.",
  },

  note: [
    {
      fr: "Ingénieur R&D chez Orange 🧠 — j'ai construit le futur de la tech, maintenant je reconstruis le mien.",
      en: "R&D Engineer at Orange 🧠 — I built the future of tech, now I'm rebuilding my own.",
    },
    {
      fr: "Suite à une tumeur, mon côté droit a posé sa dem' sans préavis. Résultat : hémiplégique, mais j'inverse la tendance si vite que les médecins n'en croient pas leurs scanners. 📈🦾",
      en: "After a tumour, my right side handed in its notice with no warning. Result: hemiplegic — but I'm turning the tide so fast the doctors can't believe their scans. 📈🦾",
    },
    {
      fr: "Mon quotidien : la semaine, hospitalisation complète — kiné intensive le matin et « reboot » personnel l'après-midi ; le week-end, je rentre à la journée. Et je ne lâche rien. 💪",
      en: "My routine: full-time hospital care during the week — intensive physio in the morning, personal “reboot” in the afternoon; on weekends I come home for the day. And I never give up. 💪",
    },
  ],

  contacts: [
    {
      label: { fr: "Email", en: "Email" },
      value: "maxlestage@icloud.com",
      href: "mailto:maxlestage@icloud.com",
    },
    {
      label: { fr: "Téléphone", en: "Phone" },
      value: "06 78 78 67 73",
      href: "tel:+33678786773",
    },
    {
      label: { fr: "GitHub", en: "GitHub" },
      value: "github.com/maxlestage",
      href: "https://github.com/maxlestage",
    },
    {
      label: { fr: "LinkedIn", en: "LinkedIn" },
      value: "linkedin.com/in/max-lestage",
      href: "https://www.linkedin.com/in/max-lestage",
    },
    {
      label: { fr: "Localisation", en: "Location" },
      value: "Bordeaux, France",
    },
    {
      label: { fr: "Permis", en: "Driving licence" },
      value: "B",
    },
  ],

  experiences: [
    {
      company: "Orange S.A",
      role: { fr: "Ingénieur logiciel", en: "Software Engineer" },
      period: { fr: "oct. 2022 — oct. 2025", en: "Oct. 2022 — Oct. 2025" },
      location: { fr: "Pessac, France", en: "Pessac, France" },
      highlights: [
        {
          fr: "Développements back-end et front-end.",
          en: "Back-end and front-end development.",
        },
        {
          fr: "Stack : Express.js, Prisma.js, Vue.js.",
          en: "Stack: Express.js, Prisma.js, Vue.js.",
        },
      ],
    },
    {
      company: "Georges SAS",
      role: { fr: "Développeur web", en: "Web Developer" },
      period: { fr: "mars 2022 — avr. 2022", en: "Mar. 2022 — Apr. 2022" },
      location: { fr: "Bassens, France", en: "Bassens, France" },
      highlights: [
        {
          fr: "Stage : travaux de débogage et création de fonctionnalités.",
          en: "Internship: debugging work and feature development.",
        },
        {
          fr: "Stack : PHP, Symfony, Twig, Doctrine, MySQL, React.js.",
          en: "Stack: PHP, Symfony, Twig, Doctrine, MySQL, React.js.",
        },
      ],
    },
    {
      company: "SportPXL",
      role: { fr: "Développeur web", en: "Web Developer" },
      period: { fr: "nov. 2020 — nov. 2021", en: "Nov. 2020 — Nov. 2021" },
      location: { fr: "Anglet, France", en: "Anglet, France" },
      highlights: [
        {
          fr: "Contrat d'apprentissage. Montée en autonomie sur Ruby et JavaScript.",
          en: "Apprenticeship. Self-taught Ruby and JavaScript.",
        },
        {
          fr: "Stack : Ruby, Ruby on Rails, Heroku.",
          en: "Stack: Ruby, Ruby on Rails, Heroku.",
        },
      ],
    },
    {
      company: "Arobiz",
      role: { fr: "Intégrateur web", en: "Web Integrator" },
      period: { fr: "févr. 2020 — juin 2020", en: "Feb. 2020 — Jun. 2020" },
      location: { fr: "Anglet, France", en: "Anglet, France" },
      highlights: [
        {
          fr: "Stage : gestion des clients et prospects, actualisation du contenu pour améliorer le référencement naturel.",
          en: "Internship: client and prospect management, content updates to improve organic search ranking.",
        },
        {
          fr: "Stack : PHP, Bootstrap.",
          en: "Stack: PHP, Bootstrap.",
        },
      ],
    },
  ],

  otherExperiences: [
    {
      org: "STAERO — Mécanique de précision",
      role: { fr: "Magasinier (intérim)", en: "Warehouse operative (temp)" },
      period: { fr: "juin 2019", en: "Jun. 2019" },
    },
    {
      org: "SARL Badets",
      role: { fr: "Chaudronnier (intérim)", en: "Boilermaker (temp)" },
      period: { fr: "juin 2019", en: "Jun. 2019" },
    },
    {
      org: "SARL Romero",
      role: { fr: "Manutentionnaire (intérim)", en: "Handler (temp)" },
      period: { fr: "mai — juin 2019", en: "May — Jun. 2019" },
    },
    {
      org: "Lauak Groupe",
      role: {
        fr: "Ajusteur aéronautique (intérim)",
        en: "Aeronautical fitter (temp)",
      },
      period: { fr: "oct. 2018 — janv. 2019", en: "Oct. 2018 — Jan. 2019" },
    },
    {
      org: "McDonald's",
      role: { fr: "Employé polyvalent (CDI)", en: "Crew member (permanent)" },
      period: { fr: "août 2017 — janv. 2018", en: "Aug. 2017 — Jan. 2018" },
    },
    {
      org: "Uniqlo",
      role: { fr: "Vendeur (CDD)", en: "Sales associate (fixed-term)" },
      period: { fr: "févr. — juil. 2017", en: "Feb. — Jul. 2017" },
    },
    {
      org: "C2B Constructions Métalliques",
      role: {
        fr: "Chaudronnier soudeur (alternance Bac Pro TCI)",
        en: "Boilermaker-welder (apprenticeship, vocational diploma)",
      },
      period: { fr: "2014 — 2015", en: "2014 — 2015" },
    },
    {
      org: "Bil Ta Garbi",
      role: {
        fr: "Maintenance d'équipements (intérim)",
        en: "Equipment maintenance (temp)",
      },
      period: { fr: "juil. 2014", en: "Jul. 2014" },
    },
    {
      org: "Galeries Lafayette",
      role: { fr: "Employé saisonnier", en: "Seasonal employee" },
      period: { fr: "juil. — août 2013", en: "Jul. — Aug. 2013" },
    },
    {
      org: "ACMM · Chaudronnerie Côte Basque · Profinox",
      role: {
        fr: "Chaudronnier soudeur (stage)",
        en: "Boilermaker-welder (internship)",
      },
      period: { fr: "2012 — 2013", en: "2012 — 2013" },
    },
  ],

  education: [
    {
      school: "Ynov · Bordeaux, France",
      degree: {
        fr: "Mastère 1 — Expert en développement web",
        en: "Master 1 — Web Development Expert",
      },
      period: { fr: "sept. 2022 — oct. 2025", en: "Sep. 2022 — Oct. 2025" },
      details: [
        {
          fr: "Développement mobile (Kotlin / Swift).",
          en: "Mobile development (Kotlin / Swift).",
        },
        {
          fr: "Front-end avancé (React.js, Recoil.js, React Router).",
          en: "Advanced front-end (React.js, Recoil.js, React Router).",
        },
        {
          fr: "Développement d'API (Express.js, Axum.rs, Salvo.rs).",
          en: "API development (Express.js, Axum.rs, Salvo.rs).",
        },
        {
          fr: "Développement desktop (Electron.js).",
          en: "Desktop development (Electron.js).",
        },
      ],
    },
    {
      school: "Université d'Helsinki · À distance",
      degree: { fr: "FullStackOpen 22", en: "FullStackOpen 22" },
      period: { fr: "Depuis mars 2022", en: "Since Mar. 2022" },
      details: [
        {
          fr: "Introduction au développement web moderne en JavaScript : applications monopages avec React.js et Node.js / Express.js.",
          en: "Introduction to modern JavaScript web development: single-page applications with React.js and Node.js / Express.js.",
        },
      ],
    },
    {
      school: "OpenClassrooms · À distance",
      degree: { fr: "Développeur web", en: "Web Developer" },
      period: { fr: "nov. 2020 — nov. 2021", en: "Nov. 2020 — Nov. 2021" },
      details: [
        {
          fr: "Diplôme de niveau 5 (Bac+2), enregistré au RNCP — fiche RNCP32173.",
          en: "Level 5 diploma (2 years post-secondary), registered with the French RNCP — RNCP32173.",
        },
      ],
    },
  ],

  skills: [
    {
      category: { fr: "Langages", en: "Languages" },
      items: ["Rust", "JavaScript", "Go", "Java", "Ruby", "PHP", "Kotlin", "Swift", "Lua", "LaTeX"],
    },
    {
      category: { fr: "Front-end", en: "Front-end" },
      items: ["React.js", "Recoil.js", "React Router", "Vue.js", "Electron.js", "Bootstrap"],
    },
    {
      category: { fr: "Back-end", en: "Back-end" },
      items: [
        "Node.js",
        "Express.js",
        "Prisma.js",
        "Axum.rs",
        "Salvo.rs",
        "Actix",
        "Ruby on Rails",
        "Symfony",
        "Laravel",
        "Doctrine",
      ],
    },
    {
      category: { fr: "Bases de données & outils", en: "Databases & tooling" },
      items: ["MySQL", "PostgreSQL", "SQLite", "Heroku", "Git"],
    },
  ],

  strengths: [
    {
      name: { fr: "Autonomie", en: "Autonomy" },
      description: {
        fr: "En cas de blocage, je sais chercher et trouver une solution, et identifier où poser les bonnes questions pour gagner du temps.",
        en: "When stuck, I can research and find a solution, and know where to ask the right questions to save time.",
      },
    },
    {
      name: { fr: "Curiosité", en: "Curiosity" },
      description: {
        fr: "Passionné par les nouvelles technologies, je me tiens à jour sur des sujets en évolution permanente comme l'informatique et la photographie.",
        en: "Passionate about new technologies, I keep up to date with constantly evolving topics such as software and photography.",
      },
    },
    {
      name: { fr: "Persévérance", en: "Perseverance" },
      description: {
        fr: "Face à un problème, je prends le recul nécessaire pour proposer une solution adéquate.",
        en: "Faced with a problem, I take the necessary step back to propose an appropriate solution.",
      },
    },
  ],

  interests: [
    { fr: "Skateboard", en: "Skateboarding" },
    { fr: "Photographie", en: "Photography" },
  ],

  languages: [
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Langue maternelle", en: "Native" },
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Technique (lu / écrit)", en: "Technical (read / written)" },
    },
  ],
};

/** Libellés de l'interface (titres de section, bouton imprimer). */
export const uiStrings: UIStrings = {
  sections: {
    summary: { fr: "Profil", en: "Summary" },
    experience: { fr: "Expérience professionnelle", en: "Professional experience" },
    otherExperience: { fr: "Autres expériences", en: "Other experience" },
    education: { fr: "Formation", en: "Education" },
    skills: { fr: "Compétences", en: "Skills" },
    strengths: { fr: "Atouts", en: "Strengths" },
    interests: { fr: "Centres d'intérêt", en: "Interests" },
    languages: { fr: "Langues", en: "Languages" },
  },
  print: { fr: "Imprimer / PDF", en: "Print / PDF" },
  nav: { fr: "Navigation du CV", en: "CV navigation" },
  skipToContent: { fr: "Aller au contenu", en: "Skip to content" },
  cvWordmark: { fr: "Curriculum Vitæ", en: "Curriculum Vitae" },
  brief: { fr: "En bref", en: "Brief information" },
  contact: { fr: "Contact", en: "Contact" },
  more: { fr: "Plus d'infos", en: "More Info" },
  less: { fr: "Réduire", en: "Close" },
  actual: { fr: "À jour", en: "Actual" },
  menu: { fr: "Menu", en: "Menu" },
  menuClose: { fr: "Fermer", en: "Close" },
  downloadCV: { fr: "Télécharger le CV", en: "Download CV" },
};
