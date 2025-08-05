import cn from "@/utils/cn";
import { LinkedInLogo, TelegramLogo, WhatsAppLogo } from "./ui/icons";
import GitHubLogo from "./ui/icons/GitHubLogo";

const SocialMediaTab = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex justify-center gap-x-10 items-center w-full text-custom-green",
        className
      )}
    >
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
          bgColorHex="transparent"
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
      >
        <GitHubLogo width={40} height={40} />
      </a>
    </div>
  );
};

export default SocialMediaTab;
