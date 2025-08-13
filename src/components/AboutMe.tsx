import { Contact, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactMeButton } from "./ContactModal/ContactModal";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SocialMediaTab from "./SocialMediaTab";
import { Button } from "./ui/Button";

const AboutMe = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center mt-28 animate-fadeIn">
      <section
        id="about"
        className="flex flex-col justify-center items-center tracking-widest max-w-[600px] w-full scroll-mt-[100rem]"
      >
        <Image
          src="/Personal_Photo.jpg"
          alt="Personal photo"
          height={200}
          width={200}
          priority
          className="rounded-full mb-6 border-[3px] border-custom-blue"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-custom-green text-center font-bold text-shadow-title">
            Greetings! 👋
          </h1>
          <h2 className="text-3xl text-center font-bold text-gray-800 my-1 text-shadow-title">
            I&apos;m Mher Gharibyan
          </h2>
          <h3 className="text-xl text-center font-semibold text-custom-green text-shadow-title">
            Full Stack Developer
          </h3>
        </div>

        <div className="flex flex-col justify-between items-center text-center leading-relaxed">
          <p className="mt-4">17 years old</p>
          <p>
            Worked on
            <span className="font-semibold text-custom-blue"> 5+</span> projects
            and at
            <span className="font-semibold text-custom-blue"> 3</span> companies
          </p>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 my-4">
          <Link
            href="https://drive.google.com/uc?export=download&id=1BkfQ6Zn038t4haFf6Z0ZCXCWmWlfxWBF"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="px-6 py-5">
              <Download className="mr-2" size={15} />
              Download CV
            </Button>
          </Link>
          <ContactMeButton className="px-6 py-5">
            <Contact className="mr-2" size={15} />
            Contact Me
          </ContactMeButton>
        </div>

        <SocialMediaTab className="text-custom-blue" />
      </section>
    </MaxWidthWrapper>
  );
};

export default AboutMe;
