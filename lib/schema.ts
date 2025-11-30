import z4 from "zod/v4";

export const newsletterSchema = z4.object({
  email: z4.email().trim(),
});
