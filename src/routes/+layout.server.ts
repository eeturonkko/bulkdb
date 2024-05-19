import type { LayoutServerLoad } from './$types';
import { db } from '$lib/db/index';
import { asc } from 'drizzle-orm';
import { weeks } from '$lib/db/schema';

export const load: LayoutServerLoad = async () => {
	return {
		weeks: await db.query.weeks.findMany({
			orderBy: [asc(weeks.id)]
		})
	};
};
