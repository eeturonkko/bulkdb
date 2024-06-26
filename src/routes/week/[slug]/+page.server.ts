import { db } from '$lib/db/index';
import { asc, desc, eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { validateComment, validateId } from '$lib/formSchema';
import { weeks, dailyWeights, comments } from '$lib/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const weekId = parseInt(slug);

	const [week, weights, commentsList] = await Promise.all([
		db.select().from(weeks).where(eq(weeks.id, weekId)),
		db.query.dailyWeights.findMany({
			where: (table, { eq }) => eq(table.weekId, weekId),
			orderBy: [asc(dailyWeights.id)]
		}),
		db.query.comments.findMany({
			where: (table, { eq }) => eq(table.weekId, weekId),
			orderBy: [desc(comments.id)]
		})
	]);

	return {
		week,
		weights,
		comments: commentsList
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
		await db.delete(weeks).where(eq(weeks.id, id));
		redirect(303, '/');
	},

	archiveWeek: async (event) => {
		const form = await superValidate(event, zod(validateId));
		const { id } = form.data;
		await db.update(weeks).set({ isArchived: true }).where(eq(weeks.id, id));
		redirect(303, '/archive');
	},

	addComment: async (event) => {
		const form = await superValidate(event, zod(validateComment));
		const { text, weekId } = form.data;
		const createdAt = new Date();
		await db.insert(comments).values({ text, createdAt, weekId });
		return { status: 200, message: 'Comment added successfully' };
	}
};
