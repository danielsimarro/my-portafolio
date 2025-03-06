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
      "Plataforma para la gestión de pacientes en hospitales, diseñada para manejar un alto volumen de datos. Trabajando en la optimización del rendimiento, resolución de problemas y desarrollo de nuevas funcionalidades, además de colaborar en la integración de servicios externos como exportación de informes, notificaciones, recordatorios, etc.",
    projectURL: "https://perseivivarium.com/",
    githubURL: "",
    imgURL: "/assets/ecommerce-app.png",
    languages: ["PHP", "ZF2", "jQuery", "JavaScript", "AWS"],
  },
  {
    name: "Eurocongres",
    description:
      "Plataforma para la gestión integral de congresos. Mi trabajo se ha centrado en el desarrollo y mejora de funcionalidades, permitiendo la organización de múltiples congresos dentro de un mismo sistema.He trabajado en la integración de pasarelas de pago, el desarrollo de un panel administrativo y la optimización del sistema, utilizando un enfoque full-stack.",
    projectURL: "https://www.eurocongres.es/",
    githubURL: "",
    imgURL: "/assets/pokedex.png",
    languages: ["Laravel", "React", "PHP", "JavaScript"],
  },
  {
    name: "Isbue",
    description:
      "Aplicación multiplataforma para la gestión empresarial, desarrollada en Flutter para Android, iOS y Web en un corto período de tiempo junto con otro desarrollador. Esta herramienta, enfocada en la eficiencia y facilidad de uso para empresas, integra funcionalidades clave como facturación, contabilidad, gestión de proyectos, control horario, sistema TPV, etc.",
    projectURL: "",
    githubURL: "",
    imgURL: "/assets/pizzeria.jpg",
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
