import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name should be of atleast 3 characters")
    .max(20, "Name should be of atmost 20 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});
