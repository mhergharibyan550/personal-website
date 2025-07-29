import MaxWidthWrapper from "../MaxWidthWrapper";
import { experienceInfo } from "./experienceInfo";
import InfoCard from "./InfoCard";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title text-center">
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
    </section>
  );
};

export default Experience;
