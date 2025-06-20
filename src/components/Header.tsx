import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { cn } from "../../lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";

const linkClassnames = buttonVariants({ variant: "link" });

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-[999] bg-custom-green bg-opacity-90 backdrop-blur-sm">
      <MaxWidthWrapper className="flex justify-between items-center py-3">
        <Link
          href="/"
          className="font-rampart text-white text-xl transition-transform hover:scale-105"
        >
          M.G.
        </Link>
        <nav className="text-white flex justify-between items-center tracking-widest space-x-8">
          <Link className={cn(linkClassnames, "bg-inherit")} href="#">
            About Me
          </Link>
          <Link className={cn(linkClassnames, "")} href="#experience">
            Experience
          </Link>
          <Link className={cn(linkClassnames, "")} href="#skills">
            Skills
          </Link>
          <Link className={cn(linkClassnames, "")} href="#lastprojects">
            Last Projects
          </Link>
        </nav>
        <Button className="bg-white text-custom-blue hover:text-white">
          Contact Me
        </Button>{" "}
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
