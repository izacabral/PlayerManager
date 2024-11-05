import { z } from 'zod';
import { skillsSchema } from './skillsSchema';

export const playerSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  nickname: z.string().optional(),
  createdAt: z.date().default(new Date()).optional(),
  skills: skillsSchema,
});

export const playerIdSchema = playerSchema.pick({ id: true });
