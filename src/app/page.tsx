import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import LastProjects from "@/components/LastProjects/LastProjects";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Skills from "@/components/Skills/Skills";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <AboutMe />
      <Experience />
      <Skills />
      <LastProjects />
      <div className="w-full">
        <MaxWidthWrapper className="flex flex-col items-center">
          <h2
            id="lastprojects"
            className="text-2xl md:text-3xl max-w-[30rem] md:max-w-[36rem] font-bold text-gray-800 mt-16 mb-10 tracking-widest text-shadow-title scroll-mt-24 text-center"
          >
            Let’s turn your concepts into reality!
          </h2>

          <Button className="w-56 md:w-64 md:text-lg bg-custom-green" size="lg">
            Contact Me!
          </Button>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </>
  );
}
