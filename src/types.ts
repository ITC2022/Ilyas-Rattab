// ============================================================
//  types.ts — Shared TypeScript interfaces for the portfolio
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
