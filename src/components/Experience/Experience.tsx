import MaxWidthWrapper from "../MaxWidthWrapper";
import InfoCard, { InfoCardProps } from "./InfoCard";

import digicaLogo from "@/assets/company_logos/digica-logo.png";
import simpliLogo from "@/assets/company_logos/simpli-logo.jpg";
import solicyLogo from "@/assets/company_logos/solicy-logo.svg";
import ufreesoftLogo from "@/assets/company_logos/ufreesoft-logo.jpg";

const Experience = () => {
  const experienceInfo: Array<Omit<InfoCardProps, "className" | "position">> = [
    {
      src: ufreesoftLogo,
      companyName: "UFreeSoft",
      duration: "Feb 2025 - Mar 2025 ( 2 months )",
      role: "Full Stack Developer",
      brandColorHex: "#384490",
      descriptions: [
        "Building stateless and consistent APIs",
        "Building interactive and responsive UI",
        "Integrating wallet connections",
        "Building secure logic for crypto transactions",
      ],
      link: "https://ufreesoft.com/",
    },
    {
      src: solicyLogo,
      companyName: "Solicy",
      duration: "May 2024 - Jule 2024 ( 2 months )",
      role: "Full Stack Developer",
      brandColorHex: "#0428E1",
      descriptions: [
        "Built DApp projects including logics for safe and fast crypto token swaps",
        "Effective engagement in team and productive co-working",
        "Building commercial projects on NextJS",
        "Building connections with APIs and ensuring their error-free operations",
      ],
      link: "https://solicy.net/",
    },
    {
      src: digicaLogo,
      companyName: "DIGICA",
      duration: "Oct 2023 - Apr 2024 ( 6 months )",
      role: "Frontend Developer",
      brandColorHex: "#792876",
      descriptions: [
        "UI development using NextJS and ReactJS.",
        "Configuring and hosting projects on Cloudflare",
        "Constant communication with team-leads and members",
        "Frontend performance optimization for fast loading times and seamless user experience.",
      ],
      link: "https://www.linkedin.com/company/digicallc/",
    },
    {
      src: simpliLogo,
      companyName: "SIMPLI",
      duration: "15.05.2024 - 14.07.2024 ( 2 months )",
      role: "Freelancer",
      brandColorHex: "#25BDAD",
      descriptions: [
        "Completing various orders including WEB projects",
        "Communicating with clients from different countries",
        "Keeping productive teamwork and providing regular updates",
      ],
      link: "https://www.linkedin.com/company/simpli-freelance-agency/",
    },
  ];

  return (
    <>
      <h2
        id="experience"
        className="text-3xl font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title scroll-mt-24 text-center"
      >
        EXPERIENCE
      </h2>
      <div className="shadow-inner-wide w-full bg-gray-50">
        <MaxWidthWrapper className="flex flex-col items-center md:gap-y-10 py-8">
          {experienceInfo.map((exp, i) => (
            <InfoCard
              {...exp}
              key={exp.companyName}
              position={i % 2 == 0 ? "left" : "right"}
            />
          ))}
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Experience;
