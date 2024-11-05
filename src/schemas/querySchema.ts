import { z } from 'zod';

export const querySchema = z.object({
  page: z.coerce.number().default(1),
  perPage: z.coerce.number().default(10),
  search: z.string().optional(),
});
