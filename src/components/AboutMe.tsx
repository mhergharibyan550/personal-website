import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/Button";
import { LinkedInLogo, TelegramLogo, WhatsAppLogo } from "./ui/icons.jsx";

const AboutMe = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center mt-28 animate-fadeIn">
      <Image
        src="/Personal_Photo.png"
        alt="Personal photo"
        height={180}
        width={180}
        className="rounded-full border-[3px] border-custom-blue"
      />
      <section className="flex flex-col justify-center items-center tracking-widest py-6 w-[600px]">
        <div className="flex flex-col items-center">
          <h1 className="text-custom-green font-bold text-shadow-title">
            Greetings! 👋
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 my-1 text-shadow-title">
            I'm Mher Gharibyan
          </h2>
          <h3 className="text-xl font-semibold text-custom-green text-shadow-title">
            Full Stack Developer
          </h3>
        </div>

        <div className="flex flex-col justify-between items-center">
          <p className="mt-4 text-center leading-relaxed">17 years old</p>
          <p>
            <span className="font-semibold text-custom-blue">5+</span> projects,
            <span className="font-semibold text-custom-blue"> 3+</span>{" "}
            companies
          </p>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-8 my-4">
          <Button variant="outline" className="px-6 py-5">
            Download CV
          </Button>
          <Button className="px-6 py-5">Contact Me</Button>
        </div>

        <div className="flex justify-between items-center w-fit gap-x-8">
          <a
            href="https://www.linkedin.com/in/mhergharibyan550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo width={40} height={40} />
          </a>
          <a
            href="https://t.me/MherGharibyan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramLogo width={40} height={40} />
          </a>
          <a
            href="https://wa.me/+37493236996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppLogo width={40} height={40} />
          </a>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default AboutMe;
