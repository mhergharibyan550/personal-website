"use client";

import "wicg-inert";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ContactMeButton } from "./ContactModal";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Navbar from "./Navbar";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <>
      {isNavbarOpen && (
        <div
          onClick={() => setIsNavbarOpen(false)}
          aria-hidden="true"
          className="z-50 fixed md:hidden inset-0 overflow-hidden bg-black/30 dark:bg-black/60 backdrop-blur-[0.5px]"
        />
      )}
      <header className="fixed top-0 z-50 h-16 w-full bg-custom-green/90 backdrop-blur-sm">
        <MaxWidthWrapper className="flex md:flex-row items-center py-3">
          <Link
            href="/"
            className="font-rampart mr-auto text-white text-2xl transition-transform hover:scale-105"
          >
            M.G.
          </Link>

          <Navbar isOpen={isNavbarOpen} toggle={setIsNavbarOpen} className="" />

          <ContactMeButton className="md:ml-auto bg-white text-custom-blue hover:text-white">
            Contact Me
          </ContactMeButton>
          <button
            className="md:hidden ml-4 h-10 w-10 flex items-center justify-center border rounded transition-transform hover:scale-105"
            aria-label="toggle navbar"
            aria-expanded={isNavbarOpen}
            aria-controls="navbar"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            {isNavbarOpen ? (
              <X size={30} className="text-white" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>
        </MaxWidthWrapper>
      </header>
    </>
  );
};

export default Header;
