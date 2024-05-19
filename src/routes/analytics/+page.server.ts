import { sql } from 'drizzle-orm';
import { db } from '$lib/db/index';
import type { PageServerLoad } from './$types';
import { weeks, dailyWeights } from '$lib/db/schema';

export const load: PageServerLoad = async () => {
	return {
		averageWeights: await db
			.select({
				week_name: weeks.name,
				average_weight: sql`ROUND(AVG(${dailyWeights.weight})::numeric, 2)`.as('average_weight')
			})
			.from(dailyWeights)
			.innerJoin(weeks, sql`${dailyWeights.weekId} = ${weeks.id}`)
			.where(sql`${weeks.isArchived} = false`)
			.groupBy(weeks.id, weeks.name)
			.orderBy(weeks.id)
	};
};
