import { ref, computed } from 'vue'

export type Lang = 'en' | 'it' | 'de'

// Shared across all components
const currentLang = ref<Lang>('en')

const ui = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      cv: 'Download CV',
    },
    hero: { greeting: "Hello, I'm", cta: 'View My Work', ctaContact: 'Get in Touch' },
    about: {
      title: 'About Me',
      subtitle: 'A bit about who I am',
      available: 'Available for work',
      stats: { projects: 'Projects', yearsExp: 'Years exp.', technologies: 'Technologies' },
      readMore: 'Read more',
      readLess: 'Read less',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies I work with',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
    },
    experience: { title: 'Experience', subtitle: 'My professional journey' },
    education: { title: 'Education', subtitle: 'My academic background' },
    contact: {
      title: 'Contact',
      subtitle: "Let's work together",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: { built: 'Built with Vue 3 + TypeScript', rights: 'All rights reserved' },
  },
  it: {
    nav: {
      about: 'Chi sono',
      skills: 'Competenze',
      experience: 'Esperienza',
      education: 'Formazione',
      contact: 'Contatti',
      cv: 'Scarica CV',
    },
    hero: { greeting: 'Ciao, sono', cta: 'Guarda i miei progetti', ctaContact: 'Contattami' },
    about: {
      title: 'Chi sono',
      subtitle: "Un po' su di me",
      available: 'Disponibile per lavoro',
      stats: { projects: 'Progetti', yearsExp: 'Anni esp.', technologies: 'Tecnologie' },
      readMore: 'Leggi di più',
      readLess: 'Leggi meno',
    },
    skills: {
      title: 'Competenze',
      subtitle: 'Tecnologie con cui lavoro',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
    },
    experience: { title: 'Esperienza', subtitle: 'Il mio percorso professionale' },
    education: { title: 'Formazione', subtitle: 'Il mio background accademico' },
    contact: {
      title: 'Contatti',
      subtitle: 'Lavoriamo insieme',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: { built: 'Costruito con Vue 3 + TypeScript', rights: 'Tutti i diritti riservati' },
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      experience: 'Erfahrung',
      education: 'Ausbildung',
      contact: 'Kontakt',
      cv: 'Lebenslauf',
    },
    hero: { greeting: 'Hallo, ich bin', cta: 'Meine Projekte', ctaContact: 'Kontakt aufnehmen' },
    about: {
      title: 'Über mich',
      subtitle: 'Ein bisschen über mich',
      available: 'Verfügbar für Arbeit',
      stats: { projects: 'Projekte', yearsExp: 'Jahre Erf.', technologies: 'Technologien' },
      readMore: 'Mehr lesen',
      readLess: 'Weniger lesen',
    },
    skills: {
      title: 'Fähigkeiten',
      subtitle: 'Technologien, mit denen ich arbeite',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & DevOps',
    },
    experience: { title: 'Erfahrung', subtitle: 'Mein beruflicher Werdegang' },
    education: { title: 'Bildungsweg', subtitle: 'Mein akademischer Hintergrund' },
    contact: {
      title: 'Kontakt',
      subtitle: 'Lass uns zusammenarbeiten',
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: { built: 'Erstellt mit Vue 3 + TypeScript', rights: 'Alle Rechte vorbehalten' },
  },
}

export function useI18n() {
  const t = computed(() => ui[currentLang.value])
  const setLang = (lang: Lang) => {
    currentLang.value = lang
  }
  return { t, currentLang, setLang }
}
