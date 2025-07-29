import { LinkedInLogo, TelegramLogo, WhatsAppLogo } from "./ui/icons";
import GitHubLogo from "./ui/icons/GitHubLogo";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-y-3 w-full mt-10 bg-custom-green min-h-40">
      <div className="flex justify-between items-center w-fit gap-x-8">
        <a
          href="https://www.linkedin.com/in/mhergharibyan550"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedInLogo
            className="text-white border border-custom-green rounded-sm hover:border-white hover:bg-white hover:text-custom-green"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://t.me/mhergharibyan550"
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
        >
          <TelegramLogo
            className="text-white border border-custom-green rounded-full hover:border-white hover:bg-white hover:text-custom-green"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://wa.me/+37493236996"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <WhatsAppLogo
            className="text-white"
            bgColorHex="#287c6c"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://github.com/mhergharibyan550/"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubLogo
            className="text-white border border-custom-green rounded-full hover:border-white hover:bg-white hover:text-custom-green"
            width={40}
            height={40}
          />
        </a>
      </div>
      <p className="text-sm text-gray-300">Let&apos;s work together!</p>
      <p className="text-xs text-gray-300">© 2025</p>
    </footer>
  );
};

export default Footer;
