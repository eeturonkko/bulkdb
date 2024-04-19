import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { newWeekFormSchema } from '$lib/formSchema';
import { zod } from 'sveltekit-superforms/adapters';
import { db } from '$lib/db/index';
import { weeks } from '$lib/db/schema';

export const actions: Actions = {
	addNewWeek: async (event) => {
		const form = await superValidate(event, zod(newWeekFormSchema));
		const { week } = form.data;
		const date = new Date();
		await db.insert(weeks).values({
			name: week,
			createdAt: date
		});
	}
};
