"use client";

import { sendEmail } from "@/actions/sendEmail";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import {
  ContactFormData,
  contactFormSchema,
  ContactFormState,
} from "@/types/contactFormTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefObject } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = ({ ref }: { ref?: RefObject<HTMLFormElement | null> }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: ContactFormData) => {
    const { success, serverMessage, zodErrors }: ContactFormState =
      await sendEmail(data);
    if (success) {
      toast.success(serverMessage || "Message sent successfully!");
      reset();
      return;
    }
    if (zodErrors) {
      Object.entries(zodErrors).forEach(([field, errorMessages]) => {
        const message = Array.isArray(errorMessages)
          ? errorMessages[0]
          : errorMessages;
        setError(field as keyof ContactFormData, {
          type: "server",
          message,
        });
      });
      return;
    }

    toast.error(serverMessage || "Something went wrong");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col flex-grow flex-shrink w-full px-5 overflow-hidden transition-all duration-300"
      ref={ref}
    >
      <div className="overflow-y-auto flex flex-col gap-2 pr-1">
        <label className="mt-4" htmlFor="name">
          Your Name:
        </label>
        <input
          id="name"
          maxLength={20}
          className="p-2 h-8 border border-gray-300 rounded-md"
          aria-required
          {...register("name")}
        />
        {errors?.name && (
          <p className="text-red-500 text-xs">{errors.name?.message}</p>
        )}

        <label htmlFor="email">Your Email: </label>
        <input
          id="email"
          className="p-2 h-8 border border-gray-300 rounded-md"
          aria-required
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}

        <label htmlFor="subject">Message Subject: </label>
        <input
          id="subject"
          className="p-2 h-8 border border-gray-300 rounded-md"
          aria-required
          type="text"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs">{errors.subject.message}</p>
        )}

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          className="p-2 max-w-full text-wrap resize-y max-h-fit min-h-24 border border-gray-300 rounded-md"
          aria-required
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-xs">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="bg-custom-green self-center w-full mt-4">
        {isSubmitting ? <Spinner /> : "Send"}
      </Button>
    </form>
  );
};

export default ContactForm;
