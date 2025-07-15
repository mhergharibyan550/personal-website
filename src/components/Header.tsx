"use client";

import "wicg-inert";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ContactMeButton } from "./ContactModal";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/Button";

const linkClassnames = buttonVariants({ variant: "link" });

const navItems = [
  { href: "#", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#lastprojects", label: "Last Projects" },
];

const Header = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inert, setInert] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      if (inert) {
        navRef.current.setAttribute("inert", "");
      } else {
        navRef.current.removeAttribute("inert");
      }
    }
  }, [inert]);

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) =>
      e.key === "Escape" ? setIsOpen(false) : null;

    document.body.addEventListener("keydown", closeOnEsc);

    return () => document.body.removeEventListener("keydown", closeOnEsc);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateNavbarInert = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      console.log(isMobile);
      if (navRef.current) {
        navRef.current.inert = isOpen && isMobile;
      }
    };

    updateNavbarInert();

    window.addEventListener("resize", updateNavbarInert);

    return () => window.removeEventListener("resize", updateNavbarInert);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
          className="z-50 fixed md:hidden inset-0 overflow-hidden bg-black/30 dark:bg-black/60 backdrop-blur-[0.5px]"
        />
      )}
      <nav className="fixed top-0 z-50 h-16 w-full bg-custom-green/90 backdrop-blur-sm">
        <MaxWidthWrapper className="flex md:flex-row items-center py-3">
          <Link
            href="/"
            className="font-rampart mr-auto text-white text-2xl transition-transform hover:scale-105"
          >
            M.G.
          </Link>

          <ul
            id="navbar"
            className={`absolute md:static flex flex-col items-center top-16 w-48 md:w-auto h-screen md:h-fit md:flex-row gap-y-4 md:gap-x-5 bg-custom-green md:bg-transparent text-white tracking-widest transition-all ${
              isOpen ? "right-0" : "-right-full"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={cn(linkClassnames)}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ContactMeButton className="md:ml-auto bg-white text-custom-blue hover:text-white">
            Contact Me
          </ContactMeButton>
          <button
            className="md:hidden ml-4 h-10 w-10 flex items-center justify-center border rounded transition-transform hover:scale-105"
            aria-label="toggle navbar"
            aria-expanded={isOpen}
            aria-controls="navbar"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={30} className="text-white" />
            ) : (
              <Menu size={30} className="text-white" />
            )}
          </button>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};

export default Header;
