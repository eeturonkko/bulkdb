import { sql } from 'drizzle-orm';
import { db } from '$lib/db/index';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		averageWeights: await db.execute(
			sql`
      SELECT
          weeks.name AS week_name,
          ROUND(AVG(daily_weight.weight)::numeric, 2) AS average_weight
      FROM
          daily_weight
      INNER JOIN
          weeks ON daily_weight.week_id = weeks.id
      WHERE
          weeks.is_archived = false
      GROUP BY
          weeks.id, weeks.name
      ORDER BY
          weeks.id
      `
		)
	};
};
