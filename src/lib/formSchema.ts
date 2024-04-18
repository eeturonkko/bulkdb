import { z } from 'zod';

export const newWeekFormSchema = z.object({
	week: z.string().min(2).max(50)
});

export type NewWeekFormSchema = typeof newWeekFormSchema;
