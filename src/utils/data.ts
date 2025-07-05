import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  // Programming languages
  { name: "PHP", imgURL: "/assets/skills/icons_php.svg" },
  { name: "Java", imgURL: "/assets/skills/icons_java.svg" },
  { name: "JavaScript", imgURL: "/assets/skills/icons_js.svg" },
  { name: "TypeScript", imgURL: "/assets/skills/icons_typescript.svg" },
  { name: "Dart", imgURL: "/assets/skills/icons_dart.svg" },
  // Databases
  { name: "MySQL", imgURL: "/assets/skills/icons_mysql.svg" },
  { name: "MongoDB", imgURL: "/assets/skills/icons_mongodb.svg" },
  // Frameworks and libraries
  { name: "Laravel", imgURL: "/assets/skills/icons_laravel.svg" },
  { name: "Zend Framework", imgURL: "/assets/skills/icons_zendframework.svg" },
  { name: "React", imgURL: "/assets/skills/logos_react.svg" },
  { name: "Flutter", imgURL: "/assets/skills/icons_flutter.svg" },
  // CMS and platforms
  { name: "WordPress", imgURL: "/assets/skills/icons_wordpress.svg" },
  { name: "Magento", imgURL: "/assets/skills/icons_magento.svg" },
  // Web technologies
  { name: "HTML", imgURL: "/assets/skills/icons_html.svg" },
  { name: "CSS", imgURL: "/assets/skills/icons_css.svg" },
  { name: "Bootstrap", imgURL: "/assets/skills/logos_bootstrap.svg" },
  { name: "jQuery", imgURL: "/assets/skills/icons_jquery.svg" },
  // Version control
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
