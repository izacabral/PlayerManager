import { z } from 'zod';

export const playerSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  nickname: z.string().optional(),
  createdAt: z.date().default(new Date()).optional(),
});

export const playerIdSchema = playerSchema.pick({ id: true });
