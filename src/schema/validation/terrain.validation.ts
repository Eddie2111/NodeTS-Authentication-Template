import { z } from "zod";

export const imageSchema = z.object({
  // id: z.string(),
  link: z.string(),
});

export const terrainSchema = z.object({
  // terrainPostId: z.string(),
  title: z.string(),
  body: z.string().optional(),
  pictures: z.array(imageSchema),
  createdAt: z.date().optional(),
  modifiedAt: z.date().optional(),
});
