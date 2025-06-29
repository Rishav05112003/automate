import {z} from "zod";

export const EditUserProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1,"email address Required"),
});