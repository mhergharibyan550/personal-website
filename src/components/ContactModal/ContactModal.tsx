"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import { Button, ButtonProps } from "../ui/Button";
import { LinkedInLogo, TelegramLogo, WhatsAppLogo } from "../ui/icons";
import GitHubLogo from "../ui/icons/GitHubLogo";
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

  const handleModalClose = () => {
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
      className="animate-fadeIn"
    >
      <div className="flex flex-col justify-around items-center relative py-8 px-5 w-96 bg-gray-100 rounded-md">
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

          <div className="flex justify-center gap-x-10 items-center w-full">
            <a
              href="https://www.linkedin.com/in/mhergharibyan550"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <LinkedInLogo
                className="text-custom-green"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://t.me/mhergharibyan550"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <TelegramLogo
                className="text-custom-green"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://wa.me/+37493236996"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <WhatsAppLogo
                className="text-custom-green"
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
              <GitHubLogo
                className="text-custom-green"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
        <hr className="h-2 w-1/2 border-slate-300 border-t-2" />

        <ContactForm />
      </div>
    </Modal>
  );
};

export default ContactModal;
