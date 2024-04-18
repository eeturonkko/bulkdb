import { date, pgTable, text, integer, real } from 'drizzle-orm/pg-core';

export const weeks = pgTable('weeks', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: date('created_at', { mode: 'date' })
});

export const dailyWeights = pgTable('daily_weight', {
	id: integer('id').primaryKey(),
	weight: real('weight').notNull(),
	date: date('date', { mode: 'date' }),
	weekId: integer('week_id').references(() => weeks.id)
});

export type Week = typeof weeks.$inferSelect;
export type DailyWeight = typeof dailyWeights.$inferSelect;
