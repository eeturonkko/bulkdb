import { db } from '$lib/db/index';
import { eq } from 'drizzle-orm';
import { weeks } from '$lib/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	return {
		week: await db
			.select()
			.from(weeks)
			.where(eq(weeks.id, parseInt(slug)))
	};
};
