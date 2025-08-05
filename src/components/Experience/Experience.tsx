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
        <MaxWidthWrapper>
          <ul className="flex flex-col w-full items-center md:gap-y-10 py-8">
            {experienceInfo.map((exp, i) => (
              <li
                className="flex flex-col items-center w-full"
                key={exp.companyName}
              >
                <InfoCard {...exp} position={i % 2 == 0 ? "left" : "right"} />
                <hr className="h-[1px] m-6 w-1/3 border-slate-300 border-y md:hidden" />
              </li>
            ))}
          </ul>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Experience;
