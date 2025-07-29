// Frontend Skills' Icons
import htmlIcon from "../../assets/skill_logos/frontend/html.svg";
import cssIcon from "../../assets/skill_logos/frontend/css.svg";
import javascriptIcon from "../../assets/skill_logos/frontend/javascript.svg";
import typescriptIcon from "../../assets/skill_logos/frontend/typescript.svg";
import reactIcon from "../../assets/skill_logos/frontend/react.svg";
import nextIcon from "../../assets/skill_logos/frontend/nextjs.svg";
import bootstrapIcon from "../../assets/skill_logos/frontend/bootstrap.svg";
import tailwindcssIcon from "../../assets/skill_logos/frontend/tailwindcss.svg";

// Backend Skills' Icons
import nodejsIcon from "../../assets/skill_logos/backend/nodejs.svg";
import expressjsIcon from "../../assets/skill_logos/backend/expressjs.svg";
import mysqlIcon from "../../assets/skill_logos/backend/mysql.svg";
import mongodbIcon from "../../assets/skill_logos/backend/mongodb.svg";

import { ProjectItemProps } from "./ProjectItem";
import casecobraImage from "@/assets/project_images/casecobra.png";
import loopysanchezImage from "@/assets/project_images/loopy-sanchez.png";
import chatappImage from "@/assets/project_images/chatapp.png";

export const projectDetails: Array<Omit<ProjectItemProps, "className">> = [
  {
    projectImage: casecobraImage,
    title: "CaseCobra",
    description:
      "Casecobra is an online store where users can purchase phone cases with their own custom designs. It features an integrated payment system and was built as a personal project to develop and enhance web development skills.",
    brandColorHex: "#16A34A",
    link: "https://casecobra-umber-five.vercel.app/",
    githubLink: "https://github.com/mhergharibyan550/casecobra",
    usedTech: [
      reactIcon,
      nextIcon,
      typescriptIcon,
      tailwindcssIcon,
      javascriptIcon,
      cssIcon,
    ],
  },
  {
    projectImage: loopysanchezImage,
    title: "Loopy Sanchez",
    description:
      "Loopy Sanchez is a legacy Los Angeles cannabis operator providing a flavor factory of legendary crafted premium strains, at a sub-premium price.",
    brandColorHex: "#36BED2",
    link: "https://loopysanchez.com/",
    githubLink: "",
    usedTech: [
      reactIcon,
      nextIcon,
      typescriptIcon,
      tailwindcssIcon,
      javascriptIcon,
      cssIcon,
    ],
  },
  {
    projectImage: chatappImage,
    title: "ChatAPP",
    description:
      "ChatAPP is a simple, real-time messaging application built to practice and enhance personal development skills in web technologies and backend communication.",
    brandColorHex: "#09090B",
    link: "https://chat-app-buhb.onrender.com/",
    githubLink: "https://github.com/mhergharibyan550/chat-app",
    usedTech: [
      reactIcon,
      typescriptIcon,
      javascriptIcon,
      cssIcon,
      nodejsIcon,
      mongodbIcon,
    ],
  },
];
