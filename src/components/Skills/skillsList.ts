import { SkillProps } from "./SkillCell";

// Frontend Skills' Icons
import htmlIcon from "@/assets/skill_logos/frontend/html.svg";
import cssIcon from "@/assets/skill_logos/frontend/css.svg";
import javascriptIcon from "@/assets/skill_logos/frontend/javascript.svg";
import typescriptIcon from "@/assets/skill_logos/frontend/typescript.svg";
import reactIcon from "@/assets/skill_logos/frontend/react.svg";
import nextIcon from "@/assets/skill_logos/frontend/nextjs.svg";
import bootstrapIcon from "@/assets/skill_logos/frontend/bootstrap.svg";
import tailwindcssIcon from "@/assets/skill_logos/frontend/tailwindcss.svg";
import reduxIcon from "@/assets/skill_logos/frontend/redux.svg";

// Backend Skills' Icons
import nodejsIcon from "@/assets/skill_logos/backend/nodejs.svg";
import expressjsIcon from "@/assets/skill_logos/backend/expressjs.svg";
import mysqlIcon from "@/assets/skill_logos/backend/mysql.svg";
import mongodbIcon from "@/assets/skill_logos/backend/mongodb.svg";

// General Skills' Icons
import jestIcon from "@/assets/skill_logos/jest.svg";
import gitIcon from "@/assets/skill_logos/git.svg";
import githubIcon from "@/assets/skill_logos/github.svg";
import webpackIcon from "@/assets/skill_logos/webpack.svg";

const skillsList: Array<Pick<SkillProps, "src" | "skillName">> = [
  // Frontend
  { src: htmlIcon, skillName: "HTML" },
  { src: cssIcon, skillName: "CSS" },
  { src: javascriptIcon, skillName: "JavaScript" },
  { src: typescriptIcon, skillName: "TypeScript" },
  { src: reactIcon, skillName: "React" },
  { src: nextIcon, skillName: "NextJS" },
  { src: reduxIcon, skillName: "Redux" },
  { src: tailwindcssIcon, skillName: "Tailwind CSS" },
  { src: bootstrapIcon, skillName: "Bootstrap" },

  // Backend
  { src: nodejsIcon, skillName: "NodeJS" },
  { src: expressjsIcon, skillName: "ExpressJS" },
  { src: mysqlIcon, skillName: "MySQL" },
  { src: mongodbIcon, skillName: "MongoDB" },

  // General
  { src: jestIcon, skillName: "Jest" },
  { src: gitIcon, skillName: "Git" },
  { src: githubIcon, skillName: "GitHub" },
  { src: webpackIcon, skillName: "Webpack" },
];

export default skillsList;
