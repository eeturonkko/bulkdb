import { db } from '$lib/db/index';
import { eq, asc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { trackingPeriods, exercises } from '$lib/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const periodId = parseInt(slug);
	const [period, exercisesList] = await Promise.all([
		db.select().from(trackingPeriods).where(eq(trackingPeriods.periodId, periodId)),
		db.query.exercises.findMany({
			orderBy: [asc(exercises.exerciseName)]
		})
	]);

	return {
		trackingPeriod: period,
		exercises: exercisesList
	};
};
