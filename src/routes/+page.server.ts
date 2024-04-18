import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { newWeekFormSchema } from '$lib/formSchema';
import { zod } from 'sveltekit-superforms/adapters';

export const actions: Actions = {
	addNewWeek: async (event) => {
		const form = await superValidate(event, zod(newWeekFormSchema));
		const { week } = form.data;
		console.log(week);
	}
};
