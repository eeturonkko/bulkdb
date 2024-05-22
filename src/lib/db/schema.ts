import { date, pgTable, text, real, serial, boolean, timestamp } from 'drizzle-orm/pg-core';

export const weeks = pgTable('weeks', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: date('created_at', { mode: 'date' }),
	target: text('target').notNull().default('Bulk'),
	isArchived: boolean('is_archived').notNull().default(false)
});

export const dailyWeights = pgTable('daily_weight', {
	id: serial('id').primaryKey(),
	weight: real('weight').notNull(),
	date: date('date', { mode: 'date' }),
	weekId: serial('week_id').references(() => weeks.id, {
		onDelete: 'cascade'
	})
});

export const comments = pgTable('comments', {
	id: serial('id').primaryKey(),
	text: text('text').notNull(),
	createdAt: date('created_at', { mode: 'date' }),
	timestamp: timestamp('timestamp').notNull().defaultNow(),
	weekId: serial('week_id').references(() => weeks.id, {
		onDelete: 'cascade'
	})
});

export type Week = typeof weeks.$inferSelect;
export type Comment = typeof comments.$inferSelect;
export type DailyWeight = typeof dailyWeights.$inferSelect;
