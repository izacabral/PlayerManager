import { z } from 'zod';
import { skillsSchema } from './skillsSchema';

export const playerSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  nickname: z.string().optional(),
  createdAt: z.date().default(new Date()).optional(),
  skills: skillsSchema,
});

export const playerIdSchema = playerSchema.extend({id: z.string().uuid()}).pick({ id: true });

export type PlayerType = z.infer<typeof playerSchema>;
