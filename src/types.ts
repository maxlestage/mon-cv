export type Locale = "fr" | "en";

/** Texte disponible dans les deux langues. */
export type Localized = Record<Locale, string>;

export interface ContactLink {
  /** Étiquette affichée (ex: "Email", "GitHub"). */
  label: Localized;
  /** Valeur affichée (ex: "moi@exemple.com"). */
  value: string;
  /** Lien cliquable (mailto:, tel:, https://...). Optionnel. */
  href?: string;
}

export interface ExperienceItem {
  company: string;
  role: Localized;
  period: Localized;
  location?: Localized;
  /** Points clés / réalisations. */
  highlights: Localized[];
}

/** Expérience secondaire affichée de façon compacte (une ligne). */
export interface SimpleEntry {
  org: string;
  role: Localized;
  period: Localized;
}

export interface EducationItem {
  school: string;
  degree: Localized;
  period: Localized;
  /** Détails optionnels (programme, diplôme obtenu...). */
  details?: Localized[];
}

export interface SkillGroup {
  category: Localized;
  items: string[];
}

/** Qualité / savoir-être avec une courte description. */
export interface Strength {
  name: Localized;
  description: Localized;
}

export interface LanguageSkill {
  name: Localized;
  level: Localized;
}

export interface CVData {
  name: string;
  /** Nom du fichier photo placé dans /public (ex: "profile.jpg"). Optionnel. */
  photo?: string;
  title: Localized;
  summary: Localized;
  contacts: ContactLink[];
  experiences: ExperienceItem[];
  otherExperiences: SimpleEntry[];
  education: EducationItem[];
  skills: SkillGroup[];
  strengths: Strength[];
  interests: Localized[];
  languages: LanguageSkill[];
}

export interface UIStrings {
  sections: {
    summary: Localized;
    experience: Localized;
    otherExperience: Localized;
    education: Localized;
    skills: Localized;
    strengths: Localized;
    interests: Localized;
    languages: Localized;
  };
  print: Localized;
  nav: Localized;
  skipToContent: Localized;
}
