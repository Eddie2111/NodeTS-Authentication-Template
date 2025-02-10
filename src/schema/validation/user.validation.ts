import { ZodError, z } from "zod";

export const userValidationSchema = z.object({
  serial: z.string().optional(),
  firstName: z.string().max(16).min(4),
  lastName: z.string().max(16).min(3),
  email: z.string().email(),
  password: z.string(),
  active: z.boolean().optional(),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const userAccountSchema = z.object({
  serial: z.string().min(30).max(36).optional(),
  email: z.string().email().min(7).max(35).optional()
})

export const userProfileSchema = z.object({
  id: z.number().int().optional(),
  about: z.string().optional(),
  profileLinks: z.array(z.string()),
  phoneNumber: z.string().max(16),
  terrainId: z.string().max(38),
  userId: z.number().int(),
  profileId: z.number().nullable(),
});

export {
    ZodError,    
}
