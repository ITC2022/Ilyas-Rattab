// ============================================================
//  types.ts — Data types
// ============================================================

export type Lang = 'en' | 'it' | 'de'

// A string translated in all 3 languages
export interface Translated {
  en: string
  it: string
  de: string
}

// A string array translated in all 3 languages (used for bio paragraphs)
export interface TranslatedArray {
  en: string[]
  it: string[]
  de: string[]
}

export interface PersonalStats {
  projects: number
  yearsExp: number
  technologies: string
}

export interface Personal {
  name: string
  available: boolean
  location: Translated
  role: Translated
  tagline: Translated
  bio: TranslatedArray
  stats: PersonalStats
}

export interface Contact {
  email: string
  github: string
  linkedin: string
  cvFile: string
}

export interface SkillGroup {
  key: 'frontend' | 'backend' | 'tools'
  color: string
  items: string[]
}

export interface Experience {
  role: Translated
  company: string
  period: string
  location: string
  description: Translated
}

export interface Education {
  degree: Translated
  school: string
  period: string
  description: Translated
}

export interface Project {
  id: string
  name: string
  github: string
  demo: string
  stack: string[]
  description: Translated
}

// ============================================================
//  UI / i18n translations
// ============================================================

export interface NavTranslations {
  about: string
  skills: string
  experience: string
  education: string
  contact: string
  cv: string
}

export interface HeroTranslations {
  greeting: string
  cta: string
  ctaContact: string
}

export interface StatsLabels {
  projects: string
  yearsExp: string
  technologies: string
}

export interface AboutTranslations {
  title: string
  subtitle: string
  available: string
  stats: StatsLabels
  readMore: string
  readLess: string
}

export interface SkillsTranslations {
  title: string
  subtitle: string
  frontend: string
  backend: string
  tools: string
}

export interface SectionTranslations {
  title: string
  subtitle: string
}

export interface ContactTranslations {
  title: string
  subtitle: string
  email: string
  github: string
  linkedin: string
}

export interface FooterTranslations {
  built: string
  rights: string
}

export interface UiTranslations {
  nav: NavTranslations
  hero: HeroTranslations
  about: AboutTranslations
  skills: SkillsTranslations
  experience: SectionTranslations
  education: SectionTranslations
  contact: ContactTranslations
  footer: FooterTranslations
}
