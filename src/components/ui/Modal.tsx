"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

type ModalProps = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, className, onClose, isOpen }: ModalProps) => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleBgClick = (e: MouseEvent) => {
      if (
        bgRef.current &&
        (!bgRef.current.contains(e.target as Node) ||
          bgRef.current === (e.target as Node))
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleBgClick);

    return () => document.removeEventListener("click", handleBgClick);
  }, [onClose]);

  useEffect(() => {
    const closeOnEsc = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;

    document.body.addEventListener("keydown", closeOnEsc);

    return () => document.body.removeEventListener("keydown", closeOnEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={cn(
          "z-[1000] fixed inset-0 overflow-hidden h-screen w-screen bg-black/30 dark:bg-black/60 backdrop-blur-[0.5px]",
          className
        )}
        onClick={onClose}
      />
      <div
        className="fixed z-[1000] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
        ref={bgRef}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
