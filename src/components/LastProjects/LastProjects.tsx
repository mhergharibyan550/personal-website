import MaxWidthWrapper from "../MaxWidthWrapper";
import ProjectItem from "./ProjectItem";
import { projectDetails } from "./projectsList";

const LastProjects = () => {
  return (
    <section id="lastprojects" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title text-center">
        LAST PROJECTS
      </h2>
      <div className="shadow-inner-wide w-full bg-gray-50">
        <MaxWidthWrapper>
          <ul className="flex flex-col items-center md:gap-y-10 py-8">
            {projectDetails.map((project) => (
              <li
                className="flex flex-col items-center w-full"
                key={project.title}
              >
                <ProjectItem {...project} />
                <hr className="h-[1px] m-6 w-1/3 border-slate-300 border-y md:hidden" />
              </li>
            ))}
          </ul>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default LastProjects;
