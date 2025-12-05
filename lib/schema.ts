import z4, { email } from "zod/v4";

export const newsletterSchema = z4.object({
  email: z4.email().trim(),
});

export const contactFormSchema = z4.object({
  name: z4
    .string("Required")
    .trim()
    .max(50, "Name must be less than 50 characters")
    .min(2, "Name must be more than 2 characters"),
  email: z4.email().trim(),
  phone: z4.string().trim(),
  subject: z4
    .string()
    .trim()
    .max(50, "Subject must be less than 20 characters")
    .min(2, "Subject must be more than 5 characters"),
  message: z4
    .string()
    .trim()
    .max(50, "Message must be less than 250 characters")
    .min(2, "Subject must be more than 5 characters"),
});
