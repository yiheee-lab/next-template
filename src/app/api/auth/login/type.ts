import { z } from "zod";

export const LoginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})

export type LoginRequest = z.infer<typeof LoginRequestSchema>