import { db } from '$lib/db/index';
import { eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { validateId } from '$lib/formSchema';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import { weeks, dailyWeights } from '$lib/db/schema';
import type { PageServerLoad, Actions } from './$types';

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
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		try {
			await db.delete(dailyWeights).where(eq(dailyWeights.id, id));
			return { status: 200, message: 'Weight entry deleted successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to delete weight entry' };
			}
		}
	},
	deleteWeek: async (event) => {
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		await Promise.all([
			db.delete(dailyWeights).where(eq(dailyWeights.weekId, id)),
			db.delete(weeks).where(eq(weeks.id, id))
		]);
		redirect(303, '/');
	},
	archiveWeek: async (event) => {
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		await db.update(weeks).set({ isArchived: true }).where(eq(weeks.id, id));
		redirect(303, '/archive');
	}
	//TODO: Add comment functionality
	/* addComment: async (event) => {
    const form = await superValidate(event, zod(validateId));
    const { text, weekId } = form.data;
    await db.insert(comments).values({ text, weekId });
    return { status: 200, message: 'Comment added successfully' };
  } */
};
