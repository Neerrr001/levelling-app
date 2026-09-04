import { z } from "zod";

export const ProfileSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    timezone: z.string().min(1)
})

export const SignupSchema = z.object({
    username:z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
})

export const LoginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8)
})