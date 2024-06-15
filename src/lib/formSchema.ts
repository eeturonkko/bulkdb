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

export const newTrackingPeriodFormSchema = z.object({
	name: z.string().min(2).max(50),
	startDate: z.date(),
	endDate: z.date().optional()
});

export const newExerciseFormSchema = z.object({
	exercise: z.string().min(2).max(50),
	description: z.string().min(2).max(200)
});

export const newTrackedExerciseFormSchema = z.object({
	periodId: z.number(),
	exerciseId: z.number()
});

export type ValidateId = typeof validateId;
export type ValidateComment = typeof validateComment;
export type NewWeekFormSchema = typeof newWeekFormSchema;
export type NewExerciseFormSchema = typeof newExerciseFormSchema;
export type NewDailyWeightFormSchema = typeof newDailyWeightFormSchema;
export type NewTrackingPeriodFormSchema = typeof newTrackingPeriodFormSchema;
