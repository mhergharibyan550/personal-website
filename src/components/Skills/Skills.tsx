import MaxWidthWrapper from "../MaxWidthWrapper";
import SkillCell from "./SkillCell";
import { backendSkills, frontendSkills } from "./skillsList";

const Skills = () => {
  return (
    <section>
      <h2
        id="skills"
        className="text-3xl font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title scroll-mt-24 text-center"
      >
        SKILLS
      </h2>
      <div className="shadow-inner-wide w-full bg-gray-50">
        <MaxWidthWrapper className="flex flex-wrap gap-3 justify-center items-center py-8">
          {[...frontendSkills, ...backendSkills].map((skill) => {
            return (
              <SkillCell
                className="border border-custom-green min-w-fit w-40 ease-in duration-200 hover:scale-105 shadow-lg"
                key={skill.skillName}
                {...skill}
              />
            );
          })}
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Skills;
