import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/Button";
import { LinkedInLogo, TelegramLogo, WhatsAppLogo } from "./ui/icons.jsx";
import { ContactMeButton } from "./ContactModal";
import GitHubLogo from "./ui/icons/GitHubLogo";
import { Contact, Download } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <MaxWidthWrapper className="flex flex-col items-center justify-center mt-28 animate-fadeIn">
      <section
        id="about"
        className="flex flex-col justify-center items-center tracking-widest max-w-[600px] scroll-mt-[100rem]"
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
          <h1 className="text-custom-green font-bold text-shadow-title">
            Greetings! 👋
          </h1>
          <h2 className="text-3xl text-center font-bold text-gray-800 my-1 text-shadow-title">
            I&apos;m Mher Gharibyan
          </h2>
          <h3 className="text-xl font-semibold text-custom-green text-shadow-title">
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
            href="https://drive.google.com/uc?export=download&id=1J6_CpEap-fG58QTG4oLYfoGW8dR8C3ir"
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

        <div className="flex justify-between items-center w-fit gap-x-8">
          <a
            href="https://www.linkedin.com/in/mhergharibyan550"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedInLogo width={40} height={40} />
          </a>
          <a
            href="https://t.me/mhergharibyan550"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramLogo width={40} height={40} />
          </a>
          <a
            href="https://wa.me/+37493236996"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <WhatsAppLogo
              className="text-custom-blue hover:text-gray-700"
              bgColorHex="white"
              switchColors={false}
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://github.com/mhergharibyan550/"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className=""
          >
            <GitHubLogo width={40} height={40} />
          </a>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default AboutMe;
