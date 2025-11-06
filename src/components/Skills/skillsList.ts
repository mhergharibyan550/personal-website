// Frontend Skills' Icons
import htmlIcon from "@/assets/skill_logos/frontend/html.svg";
import cssIcon from "@/assets/skill_logos/frontend/css.svg";
import javascriptIcon from "@/assets/skill_logos/frontend/javascript.svg";
import typescriptIcon from "@/assets/skill_logos/frontend/typescript.svg";
import reactIcon from "@/assets/skill_logos/frontend/react.svg";
import nextIcon from "@/assets/skill_logos/frontend/nextjs.svg";
import bootstrapIcon from "@/assets/skill_logos/frontend/bootstrap.svg";
import tailwindcssIcon from "@/assets/skill_logos/frontend/tailwindcss.svg";
import { SkillProps } from "./SkillCell";

// Backend Skills' Icons
import nodejsIcon from "@/assets/skill_logos/backend/nodejs.svg";
import expressjsIcon from "@/assets/skill_logos/backend/expressjs.svg";
import mysqlIcon from "@/assets/skill_logos/backend/mysql.svg";
import mongodbIcon from "@/assets/skill_logos/backend/mongodb.svg";

export const frontendSkills: Array<
  Pick<SkillProps, "src" | "skillName" | "link">
> = [
  {
    src: htmlIcon,
    skillName: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: cssIcon,
    skillName: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: javascriptIcon,
    skillName: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: typescriptIcon,
    skillName: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    src: reactIcon,
    skillName: "React",
    link: "https://react.dev/",
  },
  {
    src: nextIcon,
    skillName: "NextJS",
    link: "https://nextjs.org/",
  },
  {
    src: tailwindcssIcon,
    skillName: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  {
    src: bootstrapIcon,
    skillName: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
];

export const backendSkills: Array<
  Pick<SkillProps, "src" | "skillName" | "link">
> = [
  {
    src: nodejsIcon,
    skillName: "NodeJS",
    link: "https://nodejs.org/",
  },
  {
    src: expressjsIcon,
    skillName: "ExpressJS",
    link: "https://expressjs.com/",
  },
  {
    src: mysqlIcon,
    skillName: "MySQL",
    link: "https://www.mysql.com/",
  },
  {
    src: mongodbIcon,
    skillName: "MongoDB",
    link: "https://www.mongodb.com/",
  },
];
