"use client";

import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, className, onClose, isOpen }: ModalProps) => {
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
    const closeOnEsc = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;

    document.body.addEventListener("keydown", closeOnEsc);

    return () => document.body.removeEventListener("keydown", closeOnEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="z-[1000] fixed inset-0 overflow-hidden bg-black/30 dark:bg-black/60 backdrop-blur-[0.5px]"
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="fixed z-[1000] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default Modal;
