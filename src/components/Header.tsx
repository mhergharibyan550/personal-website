import Link from "next/link";
import { Button } from "./ui/Button";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-12 py-3 bg-custom-green">
      <h2 className="font-rampart text-white text-2xl">M.G.</h2>
      <nav className="text-white text-lg flex justify-between items-center space-x-12 tracking-widest">
        <Link href="#">About Me</Link>
        <Link href="#">Experience</Link>
        <Link href="#">Skills</Link>
        <Link href="#">Last Projects</Link>
      </nav>
      <Button className="h-full text-lg px-7 py-2">Contact Me</Button>
    </div>
  );
};

export default Header;
