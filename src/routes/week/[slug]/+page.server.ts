import { db } from '$lib/db/index';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { weeks, dailyWeights } from '$lib/db/schema';
import type { PageServerLoad, Actions } from './$types';
import { deleteWeightEntryOrWeek } from '$lib/formSchema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	return {
		week: await db
			.select()
			.from(weeks)
			.where(eq(weeks.id, parseInt(slug))),
		weights: await db
			.select()
			.from(dailyWeights)
			.where(eq(dailyWeights.weekId, parseInt(slug)))
	};
};

export const actions: Actions = {
	deleteWeightEntry: async (event) => {
		const form = await superValidate(event, zod(deleteWeightEntryOrWeek));
		const { id } = form.data;
		try {
			await db.delete(dailyWeights).where(eq(dailyWeights.id, id));
			return { status: 'success', message: 'Weight entry deleted successfully' };
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			}
		}
	},
	deleteWeek: async (event) => {
		const form = await superValidate(event, zod(deleteWeightEntryOrWeek));
		const { id } = form.data;
		await db.delete(dailyWeights).where(eq(dailyWeights.weekId, id));
		await db.delete(weeks).where(eq(weeks.id, id));
		redirect(300, '/');
	}
};
