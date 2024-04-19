import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { newWeekFormSchema, newDailyWeightFormSchema } from '$lib/formSchema';
import { zod } from 'sveltekit-superforms/adapters';
import { db } from '$lib/db/index';
import { weeks } from '$lib/db/schema';

export const load: PageServerLoad = async () => {
	return {
		weeks: await db.query.weeks.findMany()
	};
};

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
		console.log(form.data);
	}
};
