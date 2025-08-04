"use client";

import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { FormState } from "@/types/contactFormTypes";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const initialState: FormState = {
  success: false,
  data: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  serverMessage: "",
};

const ContactForm = () => {
  const [formState, sendEmailAction, isPending] = useActionState(
    sendEmail,
    initialState
  );

  const { data, serverMessage, success, zodErrors } = formState;

  const handleSubmit = (formData: FormData) => {
    sendEmailAction(formData);
  };

  useEffect(() => {
    if (success) {
      toast.success(serverMessage || "Message sent!");
      return;
    }
    if (!zodErrors) {
      toast.error(serverMessage || "Something went wrong.");
    }
  }, [formState]);

  return (
    <form action={handleSubmit} className="flex flex-col w-full gap-2">
      <label className="mt-4" htmlFor="name">
        Your Name:{" "}
      </label>
      <input
        id="name"
        name="name"
        maxLength={20}
        className="p-2 h-8 border border-gray-300 rounded-md"
        defaultValue={data?.name || ""}
      />
      {zodErrors?.name && (
        <p className="text-red-500 text-xs">{zodErrors?.name}</p>
      )}

      <label htmlFor="email">Your Email: </label>
      <input
        id="email"
        name="email"
        className="p-2 h-8 border border-gray-300 rounded-md"
        type="email"
        defaultValue={data?.email || ""}
      />
      {zodErrors?.email && (
        <p className="text-red-500 text-xs">{zodErrors?.email}</p>
      )}

      <label htmlFor="subject">Message Subject: </label>
      <input
        id="subject"
        name="subject"
        className="p-2 h-8 border border-gray-300 rounded-md"
        type="text"
        defaultValue={data?.subject || ""}
      />
      {zodErrors?.subject && (
        <p className="text-red-500 text-xs">{zodErrors?.subject}</p>
      )}

      <label htmlFor="message">Your Message:</label>
      <textarea
        id="message"
        name="message"
        className="p-2 max-w-full text-wrap resize-y max-h-fit min-h-8 border border-gray-300 rounded-md"
        rows={5}
        defaultValue={data?.message || ""}
      ></textarea>
      {zodErrors?.message && (
        <p className="text-red-500 text-xs">{zodErrors?.message}</p>
      )}

      <Button type="submit" className="bg-custom-green self-center w-full">
        {isPending ? <Spinner /> : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
