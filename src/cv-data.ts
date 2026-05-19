import type { CVData, UIStrings } from "./types";

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  ÉDITE CE FICHIER POUR PERSONNALISER TON CV                       ║
 * ║  Chaque texte a une version { fr: "...", en: "..." }.            ║
 * ║  Aucune autre modification du code n'est nécessaire.            ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */
export const cvData: CVData = {
  name: "Prénom Nom",

  title: {
    fr: "Développeur·euse logiciel",
    en: "Software Engineer",
  },

  summary: {
    fr: "Développeur·euse passionné·e par les produits web performants et le code propre. Quelques phrases pour te présenter, ton expertise et ce que tu recherches.",
    en: "Engineer passionate about performant web products and clean code. A few sentences introducing yourself, your expertise and what you are looking for.",
  },

  contacts: [
    { label: "Email", value: "prenom.nom@exemple.com", href: "mailto:prenom.nom@exemple.com" },
    { label: "GitHub", value: "github.com/maxlestage", href: "https://github.com/maxlestage" },
    { label: "LinkedIn", value: "linkedin.com/in/prenom-nom", href: "https://www.linkedin.com/in/prenom-nom" },
    { label: "Localisation", value: "Paris, France" },
  ],

  experiences: [
    {
      company: "Entreprise A",
      role: { fr: "Développeur·euse senior", en: "Senior Engineer" },
      period: { fr: "2022 — Présent", en: "2022 — Present" },
      location: { fr: "Paris, France", en: "Paris, France" },
      highlights: [
        {
          fr: "Conception et livraison d'une fonctionnalité clé utilisée par X milliers d'utilisateurs.",
          en: "Designed and shipped a key feature used by X thousand users.",
        },
        {
          fr: "Réduction du temps de chargement de 40 % via l'optimisation du bundle.",
          en: "Reduced load time by 40% through bundle optimization.",
        },
        {
          fr: "Encadrement de 2 développeur·euses junior.",
          en: "Mentored 2 junior engineers.",
        },
      ],
    },
    {
      company: "Entreprise B",
      role: { fr: "Développeur·euse web", en: "Web Developer" },
      period: { fr: "2019 — 2022", en: "2019 — 2022" },
      location: { fr: "Lyon, France", en: "Lyon, France" },
      highlights: [
        {
          fr: "Développement d'applications React/TypeScript pour des clients variés.",
          en: "Built React/TypeScript applications for a range of clients.",
        },
        {
          fr: "Mise en place de l'intégration continue et des tests automatisés.",
          en: "Set up continuous integration and automated testing.",
        },
      ],
    },
  ],

  education: [
    {
      school: "Université / École",
      degree: { fr: "Master Informatique", en: "MSc Computer Science" },
      period: { fr: "2017 — 2019", en: "2017 — 2019" },
    },
    {
      school: "Université / École",
      degree: { fr: "Licence Informatique", en: "BSc Computer Science" },
      period: { fr: "2014 — 2017", en: "2014 — 2017" },
    },
  ],

  skills: [
    {
      category: { fr: "Langages", en: "Languages" },
      items: ["TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      category: { fr: "Frontend", en: "Frontend" },
      items: ["React", "Vite", "CSS", "Accessibilité"],
    },
    {
      category: { fr: "Outils", en: "Tooling" },
      items: ["Bun", "Git", "GitHub Actions", "Docker"],
    },
  ],

  languages: [
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Langue maternelle", en: "Native" },
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Courant", en: "Fluent" },
    },
  ],
};

/** Libellés de l'interface (titres de section, bouton imprimer). */
export const uiStrings: UIStrings = {
  sections: {
    summary: { fr: "Profil", en: "Summary" },
    experience: { fr: "Expérience", en: "Experience" },
    education: { fr: "Formation", en: "Education" },
    skills: { fr: "Compétences", en: "Skills" },
    languages: { fr: "Langues", en: "Languages" },
  },
  print: { fr: "Imprimer / PDF", en: "Print / PDF" },
};
