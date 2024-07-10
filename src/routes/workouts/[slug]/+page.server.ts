import { db } from '$lib/db/index';
import { eq, asc } from 'drizzle-orm';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { trackingPeriods, exercises, trackedExercises, exerciseLogs } from '$lib/db/schema';
import {
	newTrackedExerciseFormSchema,
	newLoggedExerciseFormSchema,
	editTrackingPeriodFormSchema,
	validateId
} from '$lib/formSchema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const periodId = parseInt(slug);
	const [period, exercisesList, trackedExercisesList, loggedExercises] = await Promise.all([
		db.select().from(trackingPeriods).where(eq(trackingPeriods.periodId, periodId)),
		db.query.exercises.findMany({
			orderBy: [asc(exercises.exerciseName)]
		}),
		db
			.select({
				trackedExerciseId: trackedExercises.trackedExerciseId,
				periodId: trackedExercises.periodId,
				exerciseId: trackedExercises.exerciseId,
				exerciseName: exercises.exerciseName,
				description: exercises.exerciseDescription
			})
			.from(trackedExercises)
			.innerJoin(exercises, eq(trackedExercises.exerciseId, exercises.exerciseId))
			.where(eq(trackedExercises.periodId, periodId))
			.orderBy(asc(exercises.exerciseName)),
		db.query.exerciseLogs.findMany({
			orderBy: [asc(exerciseLogs.date)]
		})
	]);

	return {
		trackingPeriod: period,
		exercises: exercisesList,
		trackedExercises: trackedExercisesList,
		exerciseLogs: loggedExercises
	};
};

export const actions: Actions = {
	trackExercise: async (event) => {
		const form = await superValidate(event, zod(newTrackedExerciseFormSchema));
		const { periodId, exerciseId } = form.data;
		try {
			await db.insert(trackedExercises).values({ periodId, exerciseId });
			return { status: 200, message: 'Exercise tracked successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to track exercise' };
			}
		}
	},

	logExercise: async (event) => {
		const form = await superValidate(event, zod(newLoggedExerciseFormSchema));

		const { exerciseId, weight, reps, sets, date } = form.data;
		try {
			await db
				.insert(exerciseLogs)
				.values({ weight, reps, sets, trackedExerciseId: exerciseId, date });
			return { status: 200, message: 'Exercise logged successfully' };
		} catch (error) {
			console.error('Error logging exercise:', error);
			if (error instanceof Error) {
				console.error('Error details:', {
					message: error.message,
					name: error.name,
					stack: error.stack
				});
				return { status: 500, error: 'Failed to log exercise' };
			}
		}
	},

	removeTrackedExercise: async (event) => {
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		try {
			await db.delete(trackedExercises).where(eq(trackedExercises.trackedExerciseId, id));
			return { status: 200, message: 'Exercise removed successfully' };
		} catch (error) {
			console.error('Error removing tracked exercise:', error);
			if (error instanceof Error) {
				console.error('Error details:', {
					message: error.message,
					name: error.name,
					stack: error.stack
				});
				return { status: 500, error: 'Failed to remove exercise' };
			}
		}
	},
	editTrackingPeriod: async (event) => {
		const form = await superValidate(event, zod(editTrackingPeriodFormSchema));
		const { periodId, periodName, endDate } = form.data;
		try {
			await db
				.update(trackingPeriods)
				.set({ periodName, endDate })
				.where(eq(trackingPeriods.periodId, periodId));
		} catch (error) {
			console.error('Error editing tracking period:', error);
			if (error instanceof Error) {
				console.error('Error details:', {
					message: error.message,
					name: error.name,
					stack: error.stack
				});
				return { status: 500, error: 'Failed to edit tracking period' };
			}
		}
	},
	removeLoggedExercise: async (event) => {
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		try {
			await db.delete(exerciseLogs).where(eq(exerciseLogs.logId, id));
			return { status: 200, message: 'Exercise log removed successfully' };
		} catch (error) {
			console.error('Error removing logged exercise:', error);
			if (error instanceof Error) {
				console.error('Error details:', {
					message: error.message,
					name: error.name,
					stack: error.stack
				});
				return { status: 500, error: 'Failed to remove exercise log' };
			}
		}
	}
};
