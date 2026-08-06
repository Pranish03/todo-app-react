import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const registerSchema = z.object({
  full_name: z
    .string()
    .min(3, "Name should be of atleast 3 characters")
    .max(20, "Name should be of atmost 20 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must have at least 8 characters"),
});

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .trim()
      .min(8, "Old password should be of 8 characters"),
    newPassword: z
      .string()
      .trim()
      .min(8, "New password should be of 8 characters"),
    confirmPassword: z
      .string()
      .trim()
      .min(8, "Confirm password should be of 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password must match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: "New password must be different from old password",
    path: ["newPassword"],
  });
