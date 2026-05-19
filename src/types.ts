export type Locale = "fr" | "en";

/** Texte disponible dans les deux langues. */
export type Localized = Record<Locale, string>;

export interface ContactLink {
  /** Étiquette affichée (ex: "email", "GitHub"). */
  label: string;
  /** Valeur affichée (ex: "moi@exemple.com"). */
  value: string;
  /** Lien cliquable (mailto:, https://...). Optionnel. */
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

export interface EducationItem {
  school: string;
  degree: Localized;
  period: Localized;
}

export interface SkillGroup {
  category: Localized;
  items: string[];
}

export interface LanguageSkill {
  name: Localized;
  level: Localized;
}

export interface CVData {
  name: string;
  title: Localized;
  summary: Localized;
  contacts: ContactLink[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  languages: LanguageSkill[];
}

export interface UIStrings {
  sections: {
    summary: Localized;
    experience: Localized;
    education: Localized;
    skills: Localized;
    languages: Localized;
  };
  print: Localized;
}
