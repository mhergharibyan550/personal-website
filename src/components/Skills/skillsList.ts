// Frontend Skills' Icons
import htmlIcon from "../../assets/skill_logos/frontend/html.svg";
import cssIcon from "../../assets/skill_logos/frontend/css.svg";
import javascriptIcon from "../../assets/skill_logos/frontend/javascript.svg";
import typescriptIcon from "../../assets/skill_logos/frontend/typescript.svg";
import reactIcon from "../../assets/skill_logos/frontend/react.svg";
import nextIcon from "../../assets/skill_logos/frontend/nextjs.svg";
import bootstrapIcon from "../../assets/skill_logos/frontend/bootstrap.svg";
import tailwindcssIcon from "../../assets/skill_logos/frontend/tailwindcss.svg";
import { SkillProps } from "./SkillCell";

// Backend Skills' Icons
import nodejsIcon from "../../assets/skill_logos/backend/nodejs.svg";
import expressjsIcon from "../../assets/skill_logos/backend/expressjs.svg";
import mysqlIcon from "../../assets/skill_logos/backend/mysql.svg";
import mongodbIcon from "../../assets/skill_logos/backend/mongodb.svg";

export const frontendSkills: Array<Pick<SkillProps, "src" | "skillName">> = [
  {
    src: htmlIcon,
    skillName: "HTML",
  },
  {
    src: cssIcon,
    skillName: "CSS",
  },
  {
    src: javascriptIcon,
    skillName: "JavaScript",
  },
  {
    src: typescriptIcon,
    skillName: "TypeScript",
  },
  {
    src: reactIcon,
    skillName: "React",
  },
  {
    src: nextIcon,
    skillName: "NextJS",
  },
  {
    src: tailwindcssIcon,
    skillName: "Tailwind CSS",
  },
  {
    src: bootstrapIcon,
    skillName: "Bootstrap",
  },
];

export const backendSkills: Array<Pick<SkillProps, "src" | "skillName">> = [
  {
    src: nodejsIcon,
    skillName: "NodeJS",
  },
  {
    src: expressjsIcon,
    skillName: "ExpressJS",
  },
  {
    src: mysqlIcon,
    skillName: "MySQL",
  },
  {
    src: mongodbIcon,
    skillName: "MongoDB",
  },
];
