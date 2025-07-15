"use client";

import { useModal } from "@/context/ModalContext";
import { X } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "./ui/Button";
import { LinkedInLogo, TelegramLogo, WhatsAppLogo } from "./ui/icons";
import GitHubLogo from "./ui/icons/GitHubLogo";
import Modal from "./ui/Modal";

interface ContactMeButtonProps extends ButtonProps {
  value?: string;
}

export const ContactMeButton = ({
  className,
  value = "Contact Me",
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
      {value}
    </Button>
  );
};

const ContactModal = () => {
  const { closeModal, isOpen } = useModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleModalClose = () => {
    const hasInput =
      name.trim() !== "" || email.trim() !== "" || message.trim() !== "";

    if (!hasInput) {
      closeModal();
      return;
    }

    const confirmation = confirm(
      "Are you sure you want to discard your message?"
    );
    if (confirmation) {
      closeModal();
      setName("");
      setEmail("");
      setMessage("");
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
                className="text-custom-green hover:text-gray-700"
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

        <form className="flex flex-col w-full">
          <label className="mt-4" htmlFor="name">
            Your Name:{" "}
          </label>
          <input
            maxLength={50}
            className="mb-5 p-2 h-8 border border-gray-300 rounded-md"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Your Email: </label>
          <input
            className="mb-5 p-2 h-8 border border-gray-300 rounded-md"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="textarea">Your Message:</label>
          <textarea
            className="mb-5 p-2 max-w-full text-wrap resize-y max-h-fit min-h-8 border border-gray-300 rounded-md"
            id="textarea"
            name="textarea"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button className="bg-custom-green self-center w-full">Send</Button>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
