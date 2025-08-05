"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import { useRef } from "react";
import SocialMediaTab from "../SocialMediaTab";
import { Button, ButtonProps } from "../ui/Button";
import Modal from "../ui/Modal";
import ContactForm from "./ContactForm";

interface ContactMeButtonProps extends ButtonProps {
  value?: string;
}

export const ContactMeButton = ({
  className,
  children,
}: ContactMeButtonProps) => {
  const { openModal } = useModal();

  return (
    <Button
      aria-label="toggle contact modal"
      aria-haspopup="dialog"
      aria-controls="contact-modal"
      className={className}
      onClick={openModal}
    >
      {children}
    </Button>
  );
};

const ContactModal = () => {
  const { closeModal, isOpen } = useModal();
  const contactModalRef = useRef<HTMLFormElement>(null);

  const handleModalClose = () => {
    const inputs: Array<HTMLInputElement | HTMLTextAreaElement> = Array.from(
      contactModalRef.current?.querySelectorAll("input, textarea") || []
    );

    const hasInput = inputs.some((input) => input.value.trim() !== "");

    if (!hasInput) {
      closeModal();
      return;
    }

    const confirmation = confirm(
      "Are you sure you want to discard your message?"
    );

    if (confirmation) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      id="contact-modal"
      onClose={handleModalClose}
      isOpen={isOpen}
      className="animate-fadeIn flex py-8 flex-col justify-around items-center w-full max-w-96 bg-gray-100 rounded-md max-h-[95vh] min-h-[40vh] transition-all"
    >
      <button
        className="absolute right-3 top-3 rounded-md hover:bg-gray-200"
        onClick={handleModalClose}
      >
        <X
          className="text-gray-800 font-semibold"
          height={30}
          width={30}
          strokeWidth={1.3}
        />
      </button>
      <div className="flex flex-col gap-y-3 mb-4">
        <h2 className="text-2xl leading-none text-center tracking-wider">
          Find me also here:
        </h2>

        <SocialMediaTab className="gap-0 justify-between w-full" />
      </div>
      <hr className="h-2 w-1/2 border-slate-300 border-t-2" />

      <ContactForm ref={contactModalRef} />
    </Modal>
  );
};

export default ContactModal;
