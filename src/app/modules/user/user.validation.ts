import z from "zod";

export const createUserZodSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be a string" })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),

  email: z
    .string({ invalid_type_error: "Email must be a string" })
    .email({ message: "Invalid email format" }),

  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(8, {
      message: "Password must contain at least 8 characters",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    }),

  phone: z
    .string()
    .regex(/^(?:\+88|88)?01[3-9]\d{8}$/, {
      message: "Invalid Bangladeshi phone number",
    })
    .optional(),

  address: z.string({ invalid_type_error: "Address is required" }).optional(),
});
