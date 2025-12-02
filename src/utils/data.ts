import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"
import LaptopMacIcon from "@mui/icons-material/LaptopMac"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import CelebrationIcon from "@mui/icons-material/Celebration"
import SchoolIcon from "@mui/icons-material/School"
import RestaurantIcon from "@mui/icons-material/Restaurant"

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
  {
    name: "Cinemapedia – Movie App",
    description:
      "Movie catalog application built with Flutter, displaying real-time listings from TheMovieDB.\n"
      + "Includes categorized sections, infinite scroll, detailed movie pages with cast and trailers,\n"
      + "favorites system with local storage, search functionality, and light/dark mode support for an improved experience.",
    projectURL: "https://www.linkedin.com/posts/daniel-simarro-reigada_en-este-video-tengo-el-placer-de-presentarles-ugcPost-7135726682052677634-CvaB?utm_source=share&utm_medium=member_desktop&rcm=ACoAACv-gh0BMkWJCRJ-uyZuV9WCgvqETX_KV3k",
    githubURL: "",
    imgURL: "/assets/cinemapedia.png",
    languages: ["Flutter", "Dart", "TMDB API"],
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
  icon?: string
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
    employmentType: "Full-time",
    start: "Feb 2024",
    end: "Present",
    duration: "+2 years",
    location: "Granada, Spain",
    remote: "Remote",
    icon: "code",
    description:
      "I have participated in various projects, gaining experience across multiple areas and technologies.",
bullets: [
  "Hospital Ecosystem: Backend development of a hospital management platform using Zend Framework 2 and PHP, working on internal modules, performance improvements and complex architecture integrations.",
  "Congress Management Platform: Full-stack development of a multi-event system with payment gateway integration and an admin panel built in React + Laravel, improving workflows and usability.",
  "Flutter Application: Co-developed a cross-platform enterprise management app (Android, iOS, Web), implementing key modules and ensuring a clean, responsive user experience.",
  "Multi-tech Experience: Built and customized solutions with WordPress, Magento, Node.js, MySQL and modern JS tools, enhancing websites, e-commerce flows and system integrations.",
  "Collaboration & Code Quality: Daily use of Git for organized workflows, clean version control and efficient teamwork."
],
    skills: [
      "PHP", "Zend Framework 2", "Laravel", "React", "Node.js",
      "MySQL", "JavaScript", "TypeScript", "HTML", "CSS", "WordPress", "Magento", "AWS", "Git", "Docker",
    ],
  },
  {
    id: "isbue-2024",
    role: "Flutter Developer",
    company: "Isbue",
    employmentType: "Full-time",
    start: "May 2024",
    end: "Mar 2025",
    duration: "11 months",
    location: "Granada, Spain",
    icon: "phone",
    remote: "Remote",
    description:
      "At ISBUE I contributed to the development of a multi-platform business management application built with Flutter.",
    bullets: [
      "Billing and invoicing system, accounting tools, project and task management.",
      "Time tracking, POS, and user/role management with a unified responsive UI.",
      "Focus on performance, usability, and scalable architecture."
    ],
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "funkyb-2023",
    role: "Manager",
    company: "Funky Buddha Puerto Banús",
    employmentType: "Full-time",
    start: "May 2023",
    end: "Nov 2023",
    duration: "7 months",
    location: "Marbella, Málaga",
    remote: "On-site",
    icon: "event",
    description:
      "Responsible for managing the organisation and operation of the nightclub during the season.",
    bullets: ["Staff and event management", "VIP client service"],
  },
  {
    id: "comerline-intern-2022",
    role: "Full-stack Web Developer (Internship)",
    company: "Comerline",
    employmentType: "Internship",
    start: "Sep 2022",
    end: "Dec 2022",
    duration: "4 months",
    location: "Granada, Spain",
    remote: "Remote",
    icon: "laptop",
    description:
      "Specialised in developing modules for the Magento e-commerce platform, with focus on the checkout process.",
    bullets: ["Development and optimisation of Magento modules", "Debugging and database administration"],
    skills: ["PHP", "JavaScript", "Magento", "WordPress", "MySQL"],
  },
  {
    id: "starlite-2021",
    role: "Restaurant Waiter",
    company: "Starlite Festival",
    employmentType: "Full-time",
    start: "May 2021",
    end: "Sep 2021",
    duration: "5 months",
    location: "Marbella, Spain",
    remote: "On-site",
    icon: "restaurant",
    description:
      "Worked as a waiter during the summer season, providing customer service in high-demand environments.",
    bullets: ["Order management", "VIP client service"],
  }
];
