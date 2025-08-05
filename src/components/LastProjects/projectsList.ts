// Frontend Skills' Icons
import htmlIcon from "@/assets/skill_logos/frontend/html.svg";
import cssIcon from "@/assets/skill_logos/frontend/css.svg";
import tailwindcssIcon from "@/assets/skill_logos/frontend/tailwindcss.svg";
import javascriptIcon from "@/assets/skill_logos/frontend/javascript.svg";
import typescriptIcon from "@/assets/skill_logos/frontend/typescript.svg";
import reactIcon from "@/assets/skill_logos/frontend/react.svg";
import nextIcon from "@/assets/skill_logos/frontend/nextjs.svg";

// Backend Skills' Icons
import mongodbIcon from "@/assets/skill_logos/backend/mongodb.svg";
import nodejsIcon from "@/assets/skill_logos/backend/nodejs.svg";
import expressjsIcon from "@/assets/skill_logos/backend/expressjs.svg";

import casecobraImage from "@/assets/project_images/casecobra.png";
import chatappImage from "@/assets/project_images/chatapp.png";
import { ProjectItemProps } from "./ProjectItem";

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
      htmlIcon,
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
      nodejsIcon,
      expressjsIcon,
      mongodbIcon,
      javascriptIcon,
      cssIcon,
      htmlIcon,
    ],
  },
];
