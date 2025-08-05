import z from "zod";

export type ContactFormState = {
  success: boolean;
  zodErrors?: Record<string, Array<string>>;
  serverMessage: string;
};

export type ContactFormValidationErrors = {
  [K in keyof ContactFormData]?: { message: string };
};

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactFormSchema = z.object({
  name: z
    .string({ message: "Email must be string" })
    .nonempty("Name is required")
    .max(20, "Name length must be less than 20 characters")
    .regex(/^[^\d]*$/, "Name must not contain digits"),
  email: z
    .string({ message: "Email must be string" })
    .email("Invalid email address"),
  subject: z
    .string({ message: "Email must be string" })
    .min(4, "Subject length must be at least 4 characters")
    .nonempty("Subject is required"),
  message: z
    .string({ message: "Email must be string" })
    .max(10000, "Message length must be less than 10000 characters")
    .nonempty("Message is required"),
});
