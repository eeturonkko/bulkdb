import { db } from '$lib/db/index';
import { asc } from 'drizzle-orm';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import type { Actions, PageServerLoad } from './$types';
import { trackingPeriods, exercises } from '$lib/db/schema';
import { newTrackingPeriodFormSchema, newExerciseFormSchema } from '$lib/formSchema';

export const load: PageServerLoad = async () => {
	return {
		trackingPeriods: await db.query.trackingPeriods.findMany({
			orderBy: [asc(trackingPeriods.periodId)]
		})
	};
};

export const actions: Actions = {
	addNewTrackingPeriod: async (event) => {
		const form = await superValidate(event, zod(newTrackingPeriodFormSchema));
		const { name, startDate, endDate } = form.data;
		try {
			await db.insert(trackingPeriods).values({
				periodName: name,
				startDate,
				endDate: !endDate ? null : endDate
			});
			return { status: 201, message: 'Tracking period added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to add new tracking period' };
			}
		}
	},

	addNewExercise: async (event) => {
		const form = await superValidate(event, zod(newExerciseFormSchema));
		const { exercise, description } = form.data;
		try {
			await db.insert(exercises).values({
				exerciseName: exercise,
				exerciseDescription: description
			});
			return { status: 201, message: 'Exercise added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to add new exercise' };
			}
		}
	}
};
