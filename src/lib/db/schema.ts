import { date, pgTable, text, real, serial } from 'drizzle-orm/pg-core';

export const weeks = pgTable('weeks', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: date('created_at', { mode: 'date' }),
	target: text('target').notNull().default('Bulk')
});

export const dailyWeights = pgTable('daily_weight', {
	id: serial('id').primaryKey(),
	weight: real('weight').notNull(),
	date: date('date', { mode: 'date' }),
	weekId: serial('week_id').references(() => weeks.id)
});

export type Week = typeof weeks.$inferSelect;
export type DailyWeight = typeof dailyWeights.$inferSelect;
