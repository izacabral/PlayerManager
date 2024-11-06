import { z } from 'zod';

export const skillsSchema = z.object({
  id: z.string().uuid().optional(),
  strength: z.number().int().min(0).max(10),
  speed: z
    .number()
    .int()
    .min(0, { message: 'A velocidade não pode ser menor que 0.' })
    .max(10),
  driblle: z.number().int().min(0).max(10).optional(),
});
