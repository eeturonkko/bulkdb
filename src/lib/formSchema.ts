import { z } from 'zod';

export const newWeekFormSchema = z.object({
	week: z.string().min(2).max(50)
});

export const newDailyWeightFormSchema = z.object({
	weight: z.number(),
	week: z.number(),
	date: z.date()
});

export const deleteWeightEntry = z.object({
	id: z.number()
});

export type NewWeekFormSchema = typeof newWeekFormSchema;
export type DeleteWeightEntry = typeof deleteWeightEntry;
export type NewDailyWeightFormSchema = typeof newDailyWeightFormSchema;
