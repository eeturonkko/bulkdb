import { db } from '$lib/db/index';
import type { Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { weeks, dailyWeights } from '$lib/db/schema';
import { newWeekFormSchema, newDailyWeightFormSchema } from '$lib/formSchema';

export const actions: Actions = {
	addNewWeek: async (event) => {
		const form = await superValidate(event, zod(newWeekFormSchema));
		const { week } = form.data;
		const date = new Date();

		try {
			await db.insert(weeks).values({
				name: week,
				createdAt: date
			});

			return { status: 'success', message: 'Week added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
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
			return { status: 'success', message: 'Daily weight added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			}
		}
	}
};
