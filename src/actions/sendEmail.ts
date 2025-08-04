"use server";

import { contactFormSchema, FormState } from "@/types/contactFormTypes";
import getErrorMessage from "@/utils/getErrorMessage";
import { checkRateLimitByIp } from "@/utils/rateLimiter";

const FORMSPREE_ID = process.env.FORMSPREE_ID;

export const sendEmail = async (prevState: FormState, formData: unknown) => {
  const rateLimitDetails = await checkRateLimitByIp();
  if (!rateLimitDetails.success) {
    return {
      success: false,
      serverMessage: "You are being rate limited!",
    };
  }

  if (!(formData instanceof FormData)) {
    return {
      success: false,
      serverMessage: "Invalid form data",
    };
  }

  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  try {
    const validationResult = contactFormSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        data,
        success: false,
        zodErrors: validationResult.error.flatten().fieldErrors,
        serverMessage: "",
      };
    }

    const messageOptions = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: JSON.stringify(messageOptions),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return {
        success: false,
        data,
        serverMessage: "Error while sending your message. Please try later!",
      };
    }

    return {
      success: true,
      data: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      serverMessage: "Message successfully sent!",
    };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error(errorMessage);
    return {
      success: false,
      data,
      serverMessage: "Something unexpected happened. Please try later!",
    };
  }
};
