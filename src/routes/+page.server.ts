import { db } from '$lib/db/index';
import type { Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { weeks, dailyWeights } from '$lib/db/schema';
import { newWeekFormSchema, newDailyWeightFormSchema } from '$lib/formSchema';

export const actions: Actions = {
	addNewWeek: async (event) => {
		const form = await superValidate(event, zod(newWeekFormSchema));
		const { week, target } = form.data;
		const date = new Date();

		try {
			await db.insert(weeks).values({
				name: week,
				createdAt: date,
				target: target
			});

			return { status: 201, message: 'Week added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to add new week' };
			}
		}
	},

	addNewDailyWeight: async (event) => {
		const form = await superValidate(event, zod(newDailyWeightFormSchema));
		const { weight, week, date } = form.data;

		try {
			await db.insert(dailyWeights).values({
				weight,
				date,
				weekId: week
			});
			return { status: 201, message: 'Daily weight added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to add new daily weight' };
			}
		}
	}
};
