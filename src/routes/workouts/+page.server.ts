import { db } from '$lib/db/index';
//import { asc, desc, eq } from 'drizzle-orm';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import type { Actions } from './$types';
import { newTrackingPeriodFormSchema } from '$lib/formSchema';
import { trackingPeriods } from '$lib/db/schema';

/* export const load: PageServerLoad = async ({ params }) => {
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
}; */

export const actions: Actions = {
	addNewTrackingPeriod: async (event) => {
		const form = await superValidate(event, zod(newTrackingPeriodFormSchema));
		const { name, startDate, endDate } = form.data;

		try {
			await db.insert(trackingPeriods).values({
				periodName: name,
				startDate,
				endDate
			});
			return { status: 201, message: 'Tracking period added successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to add new tracking period' };
			}
		}
	}
};
