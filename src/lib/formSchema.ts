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

export const validateId = z.object({
	id: z.number()
});

export const validateComment = z.object({
	text: z.string().min(2).max(200),
	weekId: z.number()
});

export type ValidateId = typeof validateId;
export type ValidateComment = typeof validateComment;
export type NewWeekFormSchema = typeof newWeekFormSchema;
export type NewDailyWeightFormSchema = typeof newDailyWeightFormSchema;
