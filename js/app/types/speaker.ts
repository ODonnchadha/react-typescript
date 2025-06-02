import { z } from 'zod';

// Meant for runtime.
export const speakerSchema = z.object({
    id: z.number(),
    sat: z.boolean(),
    sun: z.boolean(),
    imageUrl: z.string(),
    firstName: z.string().min(1).max(100),
    lastName: z.string().min(1).max(100),
    userBioShort: z.string(),
    company: z.string(),
    twitterHandle: z.string(),
    favorite: z.boolean(),
    bio: z.string(),
    email: z.string()
    // email: z.string().email()
});

export type Speaker = z.infer<typeof speakerSchema>;

// export type Speaker = {
//     id: number,
//     sat: boolean,
//     sun: boolean,
//     imageUrl: string,
//     firstName: string,
//     lastName: string,
//     userBioShort: string,
//     company: string
//     twitterHandle: string,
//     favorite: boolean,
//     bio: string,
//     email: string
// };