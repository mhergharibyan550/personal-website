"use client";

import cn from "@/utils/cn";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef } from "react";
import { buttonVariants } from "./ui/Button";
import { useActiveSection } from "@/hooks/useActiveSection";

const linkClassnames = buttonVariants({ variant: "link" });

const navItems = [
  { sectionId: "about", label: "About Me" },
  { sectionId: "experience", label: "Experience" },
  { sectionId: "skills", label: "Skills" },
  { sectionId: "lastprojects", label: "Last Projects" },
];

const Navbar = ({
  className,
  isOpen,
  toggle,
}: {
  className?: string;
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const navRef = useRef<HTMLUListElement>(null);
  const sectionIds = useMemo(() => navItems.map((i) => i.sectionId), []);
  const activeSection = useActiveSection(sectionIds, 125);

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) =>
      e.key === "Escape" ? toggle(false) : null;

    document.body.addEventListener("keydown", closeOnEsc);

    return () => document.body.removeEventListener("keydown", closeOnEsc);
  }, [toggle]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateNavbarInert = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (navRef.current) navRef.current.inert = !isOpen && isMobile;
    };

    updateNavbarInert();

    window.addEventListener("resize", updateNavbarInert);

    return () => window.removeEventListener("resize", updateNavbarInert);
  }, [isOpen]);

  return (
    <ul
      id="navbar"
      ref={navRef}
      className={cn(
        "absolute md:static flex flex-col items-center top-16 w-48 md:w-auto h-screen md:h-fit md:flex-row gap-y-4 md:gap-x-5 bg-custom-green md:bg-transparent text-white tracking-widest transition-all",
        className,
        `${isOpen ? "right-0" : "-right-full"}`
      )}
    >
      {navItems.map((item) => {
        const isActive = item.sectionId === activeSection;
        return (
          <li key={item.sectionId}>
            <a
              href={`#${item.sectionId}`}
              onClick={() => toggle(false)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                linkClassnames,
                `${isActive && "underline translate-y-[-4px]"}`
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
