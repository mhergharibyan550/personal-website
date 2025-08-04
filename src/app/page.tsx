import AboutMe from "@/components/AboutMe";
import { ContactMeButton } from "@/components/ContactModal/ContactModal";
import Experience from "@/components/Experience/Experience";
import LastProjects from "@/components/LastProjects/LastProjects";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <AboutMe />
      <Experience />
      <Skills />
      <LastProjects />

      <MaxWidthWrapper className="flex flex-col items-center">
        <h2
          id="lastprojects"
          className="text-2xl md:text-3xl max-w-[30rem] md:max-w-[36rem] font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title scroll-mt-24 text-center"
        >
          Let’s turn your concepts into reality!
        </h2>

        <ContactMeButton className="w-56 md:w-64 bg-custom-green" size="lg">
          Contact Me!
        </ContactMeButton>
      </MaxWidthWrapper>
    </>
  );
}
