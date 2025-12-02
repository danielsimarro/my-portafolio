import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  // Programming languages
  { name: "PHP", imgURL: "/assets/skills/icons_php.svg" },
  { name: "Java", imgURL: "/assets/skills/icons_java.svg" },
  { name: "Node JS", imgURL: "/assets/skills/icons_node.svg" },
  { name: "JavaScript", imgURL: "/assets/skills/icons_js.svg" },
  { name: "TypeScript", imgURL: "/assets/skills/icons_typescript.svg" },
  { name: "Dart", imgURL: "/assets/skills/icons_dart.svg" },
  // Databases
  { name: "MySQL", imgURL: "/assets/skills/icons_mysql.svg" },
  { name: "PostgreSQL", imgURL: "/assets/skills/prostgresql_icon.svg" },
  // Frameworks and libraries
  { name: "React", imgURL: "/assets/skills/logos_react.svg" },
  { name: "Laravel", imgURL: "/assets/skills/icons_laravel.svg" },
  { name: "Flutter", imgURL: "/assets/skills/icons_flutter.svg" },
  { name: "Zend Framework", imgURL: "/assets/skills/icons_zendframework.svg" },
  // CMS and platforms
  { name: "WordPress", imgURL: "/assets/skills/icons_wordpress.svg" },
  { name: "Magento", imgURL: "/assets/skills/icons_magento.svg" },
  // Web technologies
  { name: "HTML", imgURL: "/assets/skills/icons_html.svg" },
  { name: "jQuery", imgURL: "/assets/skills/icons_jquery.svg" },
  // Version control
  { name: "AWS", imgURL: "/assets/skills/icons_aws.svg" },
  { name: "Git", imgURL: "/assets/skills/icons_git.svg" }
]

export const projectData = [
  {
    name: "Persei Vivarium",
    description:
      "Platform for patient management in hospitals, designed to handle a high volume of data.\n"
      + "Working on performance optimization, problem resolution, and the development of new features,\n"
      + "as well as collaborating in the integration of external services such as report export, notifications, reminders, etc.",
    projectURL: "https://perseivivarium.com/",
    githubURL: "",
    imgURL: "/assets/perseivivarium.png",
    languages: ["PHP", "ZF2", "jQuery", "JavaScript", "AWS"],
  },
  {
    name: "Eurocongres",
    description:
      "Comprehensive congress management platform.\n"
      + "My work has focused on the development and improvement of functionalities, allowing the organization\n"
      + "of multiple congresses within the same system.\n"
      + "I have worked on the integration of payment gateways, the development of an administrative panel,\n"
      + "and the optimization of the system, using a full-stack approach.",
    projectURL: "https://www.eurocongres.es/",
    githubURL: "",
    imgURL: "/assets/eurocongres.png",
    languages: ["Laravel", "React", "PHP", "JavaScript"],
  },
  {
    name: "Isbue",
    description:
      "Multi-platform business management application, developed in Flutter for Android, iOS, and Web\n"
      + "in a short period of time together with another developer.\n"
      + "This tool, focused on efficiency and ease of use for businesses, integrates key functionalities such as\n"
      + "billing, accounting, project management, time tracking, POS system, etc.",
    projectURL: "https://www.isbue.io/",
    githubURL: "",
    imgURL: "/assets/isbue.png",
    languages: ["Flutter", "Dart", "Firebase"],
  },
  {
    name: "Ofilingua – Translation System",
    description:
      "Migration of a legacy PHP 5.6 system to a modern Laravel + React architecture.\n"
      + "Improved system performance, security, and maintainability while keeping the business logic intact.\n"
      + "Refactored core modules, implemented new workflows, and modernized the UI for better usability.",
    projectURL: "https://www.ofilingua.com/",
    githubURL: "",
    imgURL: "/assets/ofilingua.png",
    languages: ["Laravel", "React", "PHP 8", "PostgreSQL"],
  },
  {
    name: "Perseed API – Backend Migration",
    description:
      "Migration of the Perseed ecosystem from direct platform calls to a unified Node.js API.\n"
      + "This change improves scalability, performance, and consistency across all modules.\n"
      + "I contributed to key parts of the API and helped integrate it into the existing platform,\n"
      + "making the system easier to maintain and ready for future features.",
    projectURL: "https://perseivivarium.com/",
    githubURL: "",
    imgURL: "/assets/perseiapi.png",
    languages: ["Node.js", "TypeScript", "MySQL"],
  },
];

export const experience = (
  (new Date().getTime() - new Date("2020-12-04").getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)
).toLocaleString("en", {
  maximumFractionDigits: 2,
  style: "unit",
  unit: "year",
  unitDisplay: "long",
})

export const aboutData: About = {
  badges: [
    {
      imgURL: "/assets/cisco_ccna.png",
    },
  ]
}

export type ExperienceItem = {
  id: string
  role: string
  company: string
  employmentType?: string
  start?: string
  end?: string
  duration?: string
  location?: string
  remote?: string
  description?: string
  bullets?: string[]
  skills?: string[]
  logo?: string
}

export const experienceData: ExperienceItem[] = [
  {
    id: "comerline-2024",
    role: "Full-stack Web Developer",
    company: "Comerline",
    employmentType: "Jornada completa",
    start: "feb. 2024",
    end: "actualidad",
    duration: "1 año 10 meses",
    location: "Alhendín, Andalucía, España",
    remote: "En remoto",
    description:
      "I have participated in various projects, gaining experience in multiple areas and technologies.",
    bullets: [
      "Hospital Ecosystem: development with Zend Framework 2 and PHP, backend and complex architecture.",
      "Congress Management Platform: integration of payment gateways and admin panel (React + Laravel).",
      "Flutter Application: rapid development of a multiplatform app (Android, iOS, Web).",
      "Worked with WordPress, Magento, Node.js, MySQL, JavaScript, HTML and CSS.",
      "Version control and collaboration using Git."
    ],
    skills: ["PHP", "Zend Framework 2", "Laravel", "React", "Node.js", "MySQL", "JavaScript", "HTML", "CSS", "WordPress", "Magento", "Git"],
  },
  {
    id: "isbue-2024",
    role: "Flutter Developer",
    company: "Isbue",
    employmentType: "Jornada completa",
    start: "may. 2024",
    end: "mar. 2025",
    duration: "11 meses",
    location: "Granada, Andalucía, España",
    remote: "En remoto",
    description:
      "At ISBUE I contributed to the development of a multi-platform business management application built in Flutter.",
    bullets: [
      "Billing and invoicing system, accounting tools, project and task management.",
      "Time tracking, POS and user/role management with a unified responsive UI.",
      "Focus on performance, usability and scalable architecture."
    ],
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "funkyb-2023",
    role: "Manager",
    company: "Funky Buddha Puerto Banús",
    employmentType: "Jornada completa",
    start: "may. 2023",
    end: "nov. 2023",
    duration: "7 meses",
    location: "Marbella, Málaga",
    remote: "Presencial",
    description: "Responsible for managing the organisation and operation of the nightclub during the season.",
    bullets: ["Staff and event management", "Service to VIP clients"],
  },
  {
    id: "comerline-intern-2022",
    role: "Full-stack Web Developer (Prácticas)",
    company: "Comerline",
    employmentType: "Contrato de prácticas",
    start: "sept. 2022",
    end: "dic. 2022",
    duration: "4 meses",
    location: "Alhendín, Andalucía, España",
    remote: "En remoto",
    description:
      "Specialised in developing modules for the Magento e-commerce platform with focus on the purchase process.",
    bullets: ["Development and optimisation of Magento modules", "Debugging and DB administration"],
    skills: ["JavaScript", "Magento", "WordPress", "MySQL"],
  },
  {
    id: "starlite-2021",
    role: "Restaurant Waiter",
    company: "Starlite Festival",
    employmentType: "Jornada completa",
    start: "may. 2021",
    end: "sept. 2021",
    duration: "5 meses",
    location: "Marbella, Andalucía, España",
    remote: "Presencial",
    description: "Worked as a waiter during the summer season providing customer service in high-demand environments.",
    bullets: ["Order management", "VIP client service"],
  }
]
