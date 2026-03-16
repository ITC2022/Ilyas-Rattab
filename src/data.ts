import type { Personal, Contact, SkillGroup, Experience, Education, Project } from './types'

// ============================================================
//  data.ts — Your personal portfolio data
//  Edit ONLY this file to update your portfolio content.
// ============================================================

// ------------------------------------------------------------
//  PERSONAL INFO
// ------------------------------------------------------------
export const personal = {
  name: 'Ilyas Rattab',
  available: true,
  location: {
    en: 'Berlin, Germany',
    it: 'Berlino, Germania',
    de: 'Berlin, Deutschland',
  },

  // Role shown in hero (translated)
  role: {
    en: 'Full Stack Developer',
    it: 'Full Stack Developer',
    de: 'Full Stack Entwickler',
  },

  // Tagline shown under name in hero (translated)
  tagline: {
    en: 'Building modern web experiences with Vue, Node.js & TypeScript',
    it: 'Costruisco esperienze web moderne con Vue, Node.js & TypeScript',
    de: 'Moderne Webanwendungen mit Vue, Node.js & TypeScript',
  },

  // About section — 3 paragraphs (translated)
  bio: {
    it: [
      'Sono uno sviluppatore appassionato che vive a Berlino, cresciuto in Italia. La tecnologia mi ha affascinato fin da bambino e, dopo anni di esperienze lavorative in settori diversi, ho finalmente seguito la mia vera passione: lo sviluppo software.',
      "Durante la mia formazione da sviluppatore ho avuto l'opportunità di svolgere uno stage molto formativo presso il Fraunhofer, uno dei principali istituti di ricerca europei, dove ho lavorato su progetti full-stack reali con Vue, Node.js e GraphDB.",
      'Vivo secondo il motto "per aspera ad astra": attraverso le difficoltà fino alle stelle. Credo fermamente che i traguardi più significativi nascano dalla perseveranza e che ogni ostacolo sia un passo avanti verso qualcosa di più grande.',
    ],
    en: [
      'I am a passionate developer living in Berlin, raised in Italy. Technology has fascinated me since childhood, and after years of diverse professional experience across different industries, I finally took the leap to pursue my true calling: software development.',
      "During my developer training, I had the opportunity to complete a highly formative internship at Fraunhofer, one of Europe's leading research institutions, where I worked on real-world full-stack projects and deepened my skills in Vue, Node.js, and GraphDB.",
      'I live by the motto "per aspera ad astra": through hardship to the stars. It reflects my belief that meaningful achievements come through persistence, and that every challenge is a step forward on the path to something greater.',
    ],
    de: [
      'Ich bin ein leidenschaftlicher Entwickler, der in Berlin lebt, aufgewachsen in Italien. Seit meiner Kindheit begeistere ich mich für Technologie, und nach Jahren vielfältiger Berufserfahrung in verschiedenen Branchen habe ich endlich den Schritt gewagt, meinem eigentlichen Traum zu folgen: der Softwareentwicklung.',
      'Während meiner Umschulung durfte ich ein sehr prägendes Praktikum beim Fraunhofer-Institut absolvieren, einer der führenden Forschungseinrichtungen Europas, wo ich an realen Full-Stack-Projekten mit Vue, Node.js und GraphDB gearbeitet habe.',
      '"Per aspera ad astra": durch Mühsal zu den Sternen. Dieses Motto begleitet mich täglich: Ich glaube daran, dass echte Leistung durch Ausdauer entsteht und jede Herausforderung ein Schritt nach vorne ist.',
    ],
  },

  // Stats shown in about card
  stats: {
    projects: 12,
    yearsExp: 1,
    technologies: '20+',
  },
} satisfies Personal

// ------------------------------------------------------------
//  CONTACT
// ------------------------------------------------------------
export const contact = {
  email: 'rattab.ilyas@outlook.com',
  github: 'github.com/ITC2022',
  linkedin: 'linkedin.com/in/ilyas-rattab',
  cvFile: './cv.pdf',
} satisfies Contact

// ------------------------------------------------------------
//  SKILLS — key must be 'frontend', 'backend', or 'tools'
// ------------------------------------------------------------
export const skills = [
  {
    key: 'frontend',
    color: '#3b82f6',
    items: [
      'Vue 3',
      'TypeScript',
      'React',
      'CSS',
      'Tailwind',
      'D3.js',
      'Anime.js',
      'Bootstrap',
      'HTML5',
    ],
  },
  {
    key: 'backend',
    color: '#22c55e',
    items: [
      'Node.js',
      'Express',
      'Axios',
      'REST API',
      'GraphDB',
      'SPARQL',
      'Python',
      'FastAPI',
      'PHP',
      'MariaDB',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    key: 'tools',
    color: '#f59e0b',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'GitLab',
      'Linux',
      'CI/CD',
      'VS Code',
      'Vite',
      'Postman',
      'Figma',
      'Mermaid',
    ],
  },
] satisfies SkillGroup[]

// ------------------------------------------------------------
//  EXPERIENCE — most recent first
// ------------------------------------------------------------
export const experience = [
  {
    role: {
      de: 'Full Stack Developer (Praktikum)',
      en: 'Full Stack Developer (Stage)',
      it: 'Full Stack Developer (Stage)',
    },
    company: 'Fraunhofer (IPK)',
    period: '09/2025 – 03/2026',
    location: 'Berlin',
    description: {
      en: 'Full stack development with focus on backend architecture, REST API design, containerization with Docker, and deployment on a virtual machine. Stack: Vue 3, Node.js, TypeScript, GraphDB, SPARQL.',
      it: 'Sviluppo full stack con focus su architettura backend, design di REST API, containerizzazione con Docker e deployment su macchina virtuale. Stack: Vue 3, Node.js, TypeScript, GraphDB, SPARQL.',
      de: 'Full-Stack-Entwicklung mit Schwerpunkt auf Backend-Architektur, REST-API-Design, Containerisierung mit Docker und Deployment auf einer virtuellen Maschine. Stack: Vue 3, Node.js, TypeScript, GraphDB, SPARQL.',
    },
  },
  {
    role: { de: 'Sales Manager', it: 'Sales Manager', en: 'Sales Manager' },
    company: 'Fenchem Biochemie GmbH',
    period: '01/2023 – 05/2023',
    location: 'Köln',
    description: {
      en: 'Customer acquisition and retention, development of sales strategies.',
      it: 'Acquisizione clienti e sviluppo di strategie di vendita.',
      de: 'Auf- und Ausbau des Kundenstamms sowie Umsetzung von Verkaufsstrategien.',
    },
  },
  {
    role: { de: 'E-Commerce Manager', en: 'E-Commerce Manager', it: 'E-Commerce Manager' },
    company: 'Warnke Marketing Services GmbH',
    period: '04/2021 – 01/2023',
    location: 'Köln',
    description: {
      en: 'Amazon Seller Central account management, SEO & SEA, performance monitoring.',
      it: 'Gestione account Amazon, SEO & SEA, monitoraggio delle performance.',
      de: 'Account-Management über Amazon Seller Central, SEO & SEA, Leistungsüberwachung.',
    },
  },
] satisfies Experience[]

// ------------------------------------------------------------
//  EDUCATION — most recent first
// ------------------------------------------------------------
export const education = [
  {
    degree: {
      en: 'Developer Training: Application Development',
      de: 'Umschulung: Fachinformatiker Anwendungsentwicklung',
      it: 'Formazione: Sviluppatore Software',
    },
    school: 'BBQ-Bauman, Bildung und Qualifizierung',
    period: '2024 – 06/2026',
    description: {
      en: 'Retraining as application developer, IHK certificate.',
      it: 'Riqualificazione come sviluppatore, certificato IHK.',
      de: 'Umschulung zum Fachinformatiker AE, Abschluss mit IHK-Zertifikat.',
    },
  },
  {
    degree: {
      en: 'Certification: E-Commerce Manager',
      it: 'Certificazione: E-Commerce Manager',
      de: 'Qualifizierung: E-Commerce Manager',
    },
    school: 'IHK Köln',
    period: '05/2022',
    description: {
      en: 'E-Commerce management certification by IHK Köln.',
      it: 'Certificazione gestione e-commerce presso IHK Köln.',
      de: 'Zertifizierung zum E-Commerce Manager bei der IHK Köln.',
    },
  },
  {
    degree: {
      en: 'Fundamentals of Digital Marketing',
      it: 'Fondamenti di Marketing Digitale',
      de: 'Grundlagen des digitalen Marketings',
    },
    school: 'Google Digital Training',
    period: '06/2022',
    description: {
      en: 'Online certification in digital marketing fundamentals by Google.',
      it: 'Certificazione online nei fondamentali del marketing digitale.',
      de: 'Online-Zertifizierung in den Grundlagen des digitalen Marketings.',
    },
  },
  {
    degree: { de: 'Fachabitur', en: 'High School Diploma', it: 'Diploma di Maturità' },
    school: 'Instituto Luigi Einaudi',
    period: '12/2015',
    description: {
      en: "Secondary school leaving certificate, Porto Sant'Elpidio, Italy.",
      it: "Diploma di maturità, Porto Sant'Elpidio, Italia.",
      de: "Fachabitur, Porto Sant'Elpidio, Italien.",
    },
  },
] satisfies Education[]
