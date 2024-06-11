/* import { db } from '$lib/db/index';
import { asc, desc, eq } from 'drizzle-orm';
import { redirect } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms'; */
import type { PageServerLoad } from './$types';
/* import { validateComment, validateId } from '$lib/formSchema';
import { weeks, dailyWeights, comments } from '$lib/db/schema'; */

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const trackingPeriodId = parseInt(slug);
	return {
		trackingPeriodId
	};
};
