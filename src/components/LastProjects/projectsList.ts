import { ProjectItemProps } from "./ProjectItem";
import casecobraImage from "@/assets/project_images/casecobra.png";
import loopysanchezImage from "@/assets/project_images/loopy-sanchez.png";
import chatappImage from "@/assets/project_images/chatapp.png";

export const projectDetails: Array<Omit<ProjectItemProps, "className">> = [
  {
    projectImage: casecobraImage,
    title: "CaseCobra",
    description: "CaseCobra description",
    brandColorHex: "#16A34A",
    link: "https://casecobra-umber-five.vercel.app/",
  },
  {
    projectImage: loopysanchezImage,
    title: "Loopy Sanchez",
    description: "Loopy Sanchez",
    brandColorHex: "#36BED2",
    link: "https://loopysanchez.com/",
  },
  {
    projectImage: chatappImage,
    title: "ChatAPP",
    description: "Simple ChatAPP",
    brandColorHex: "#09090B",
    link: "https://chat-app-buhb.onrender.com/",
  },
];
