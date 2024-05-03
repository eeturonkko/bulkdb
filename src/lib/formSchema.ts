import { z } from 'zod';

export const newWeekFormSchema = z.object({
	week: z.string().min(2).max(50),
	target: z.string()
});

export const newDailyWeightFormSchema = z.object({
	weight: z.number(),
	week: z.number(),
	date: z.date()
});

export const deleteWeightEntryOrWeek = z.object({
	id: z.number()
});

export type NewWeekFormSchema = typeof newWeekFormSchema;
export type DeleteWeightEntryOrWeek = typeof deleteWeightEntryOrWeek;
export type NewDailyWeightFormSchema = typeof newDailyWeightFormSchema;
