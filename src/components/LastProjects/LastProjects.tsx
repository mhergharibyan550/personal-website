import MaxWidthWrapper from "../MaxWidthWrapper";
import ProjectItem from "./ProjectItem";
import { projectDetails } from "./projectsList";

const LastProjects = () => {
  return (
    <section>
      <h2
        id="lastprojects"
        className="text-3xl font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title scroll-mt-24 text-center"
      >
        LAST PROJECTS
      </h2>
      <div className="shadow-inner-wide w-full bg-gray-50">
        <MaxWidthWrapper className="flex flex-col md:gap-y-10 items-center py-8">
          {projectDetails.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default LastProjects;
