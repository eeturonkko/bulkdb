import { db } from '$lib/db/index';
import { eq, asc } from 'drizzle-orm';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { newTrackedExerciseFormSchema } from '$lib/formSchema';
import { trackingPeriods, exercises, trackedExercises } from '$lib/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const periodId = parseInt(slug);
	const [period, exercisesList, trackedExercisesList] = await Promise.all([
		db.select().from(trackingPeriods).where(eq(trackingPeriods.periodId, periodId)),
		db.query.exercises.findMany({
			orderBy: [asc(exercises.exerciseName)]
		}),
		db
			.select({
				trackedExerciseId: trackedExercises.trackedExerciseId,
				periodId: trackedExercises.periodId,
				exerciseId: trackedExercises.exerciseId,
				exerciseName: exercises.exerciseName,
				description: exercises.exerciseDescription
			})
			.from(trackedExercises)
			.innerJoin(exercises, eq(trackedExercises.exerciseId, exercises.exerciseId))
			.where(eq(trackedExercises.periodId, periodId))
			.orderBy(asc(exercises.exerciseName))
	]);

	return {
		trackingPeriod: period,
		exercises: exercisesList,
		trackedExercises: trackedExercisesList
	};
};

export const actions: Actions = {
	trackExercise: async (event) => {
		const form = await superValidate(event, zod(newTrackedExerciseFormSchema));
		const { periodId, exerciseId } = form.data;
		try {
			await db.insert(trackedExercises).values({ periodId, exerciseId });
			return { status: 200, message: 'Exercise tracked successfully' };
		} catch (error) {
			if (error instanceof Error) {
				return { status: 500, error: 'Failed to track exercise' };
			}
		}
	}
};
