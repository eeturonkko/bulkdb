import type { LayoutServerLoad } from './$types';
import { db } from '$lib/db/index';

export const load: LayoutServerLoad = async () => {
	return {
		weeks: await db.query.weeks.findMany()
	};
};
