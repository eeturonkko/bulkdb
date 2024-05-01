import { db } from '$lib/db/index';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { weeks } from '$lib/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	return {
		week: await db
			.select()
			.from(weeks)
			.where(eq(weeks.id, parseInt(slug)))
	};
};
