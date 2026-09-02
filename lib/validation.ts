import { z } from "zod";

export const ProfileSchema = z.object({
    username: z.string().min(1),
    email: z.string(),
    timezone: z.string().min(1)
})