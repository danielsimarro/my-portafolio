import { About, Project, Skill } from "../App.props"
import { githubProfile } from "./constants"

export const skillData: Skill[] = [
  { name: "React", imgURL: "/assets/skills/logos_react.svg" },
  { name: "Next.js", imgURL: "/assets/skills/logo_next.svg" },
  { name: "Vue", imgURL: "/assets/skills/vuedotjs-color.svg" },
  { name: "Typescript", imgURL: "/assets/skills/icons-typescript.svg" },
  { name: "Redux", imgURL: "/assets/skills/redux-color.svg" },
  { name: "React Query", imgURL: "/assets/skills/react-query.svg" },
  { name: "Material UI", imgURL: "/assets/skills/logo_mui.svg" },
  { name: "Bootstrap", imgURL: "/assets/skills/logos_bootstrap.svg" },
  { name: "Git", imgURL: "/assets/skills/logos_git.svg" },
  { name: "HTML", imgURL: "/assets/skills/icons_html.svg" },
  { name: "CSS", imgURL: "/assets/skills/icons_css.svg" },
  { name: "Javascript", imgURL: "/assets/skills/icons_js.svg" },
]

export const projectData: Project[] = [
  {
    name: "E-Commerce App",
    description:
      "It is an e-commerce web application made using Next.js, Material UI and Redux Toolkit. Customers can browse products, add items to the cart, adjust quantities, remove products, apply coupon codes, place orders, and view order history.",
    projectURL: "",
    githubURL: `${githubProfile}`,
    imgURL: "/assets/ecommerce-app.png",
  },
  {
    name: "Pokédex",
    description:
      "A pokedex website that allows users to search and view information about various Pokémon characters. A fuzzy search feature is present on the home page. User can view more details by clicking on the particular pokémon.",
    projectURL: "",
    githubURL: `${githubProfile}/my-pokedex`,
    imgURL: "/assets/pokedex.png",
  },
  {
    name: "Pizzeria",
    description:
      "Pizzeria is a MEAN Stack web application, where users order pizza online. Users can choose from the existing menu and order pizzas, also they can also customize their pizza by choosing ingredients.",
    projectURL: "",
    githubURL: `${githubProfile}/Pizzeria`,
    imgURL: "/assets/pizzeria.jpg",
  },
]

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
