"use client";

import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[], offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset + 1;

      let currentId = "";

      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (!el) continue;

        if (scrollPosition >= el.offsetTop) {
          currentId = sectionIds[i];
        } else {
          break;
        }
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
        if (currentId) {
          history.replaceState(null, "", `#${currentId}`);
        } else {
          history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset, activeId]);

  return activeId;
};
