"use server";

import {
  ContactFormData,
  contactFormSchema,
  ContactFormState,
} from "@/types/contactFormTypes";
import getErrorMessage from "@/utils/getErrorMessage";
import { checkRateLimitByIp } from "@/utils/rateLimiter";

const FORMSPREE_ID = process.env.FORMSPREE_ID;

export const sendEmail = async (
  data: ContactFormData
): Promise<ContactFormState> => {
  const rateLimitDetails = await checkRateLimitByIp();
  if (!rateLimitDetails.success) {
    return {
      success: false,
      serverMessage: "You are being rate limited!",
    };
  }

  try {
    const validationResult = contactFormSchema.safeParse(data);
    if (!validationResult.success) {
      return {
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
        serverMessage: "Error while sending your message. Please try later!",
      };
    }

    return {
      success: true,
      serverMessage: "Message successfully sent!",
    };
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error(errorMessage);
    return {
      success: false,
      serverMessage: "Something unexpected happened. Please try later!",
    };
  }
};
