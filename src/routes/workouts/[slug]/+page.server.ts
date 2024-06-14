import { db } from '$lib/db/index';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { trackingPeriods } from '$lib/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const periodId = parseInt(slug);
	return {
		trackingPeriod: await db
			.select()
			.from(trackingPeriods)
			.where(eq(trackingPeriods.periodId, periodId))
	};
};
