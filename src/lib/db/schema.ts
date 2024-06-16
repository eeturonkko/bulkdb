import {
	date,
	pgTable,
	text,
	real,
	serial,
	boolean,
	timestamp,
	integer
} from 'drizzle-orm/pg-core';

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

export const exercises = pgTable('exercises', {
	exerciseId: serial('exercise_id').primaryKey(),
	exerciseName: text('exercise_name').notNull(),
	exerciseDescription: text('exercise_description')
});

export const trackingPeriods = pgTable('tracking_periods', {
	periodId: serial('period_id').primaryKey(),
	periodName: text('period_name').notNull(),
	startDate: timestamp('start_date').notNull().defaultNow(),
	endDate: timestamp('end_date')
});

export const trackedExercises = pgTable('tracked_exercises', {
	trackedExerciseId: serial('tracked_exercise_id').primaryKey(),
	periodId: serial('period_id').references(() => trackingPeriods.periodId, {
		onDelete: 'cascade'
	}),
	exerciseId: serial('exercise_id').references(() => exercises.exerciseId, {
		onDelete: 'cascade'
	})
});

export const exerciseLogs = pgTable('exercise_logs', {
	logId: serial('log_id').primaryKey(),
	trackedExerciseId: serial('tracked_exercise_id').references(
		() => trackedExercises.trackedExerciseId,
		{
			onDelete: 'cascade'
		}
	),
	weight: real('weight').notNull(),
	reps: integer('reps').notNull(),
	sets: integer('sets').notNull(),
	date: date('date', { mode: 'date' }),
	createdAt: timestamp('created_at').defaultNow()
});

export const workouts = pgTable('workouts', {
	workoutId: serial('workout_id').primaryKey(),
	workoutName: text('workout_name').notNull(),
	workoutDescription: text('workout_description'),
	caloriesBurned: real('calories_burned').notNull(),
	duration: real('duration').notNull()
});

export type Week = typeof weeks.$inferSelect;
export type Comment = typeof comments.$inferSelect;
export type Workout = typeof workouts.$inferSelect;
export type Exercise = typeof exercises.$inferSelect;
export type ExerciseLog = typeof exerciseLogs.$inferSelect;
export type DailyWeight = typeof dailyWeights.$inferSelect;
export type TrackingPeriod = typeof trackingPeriods.$inferSelect;
export type TrackedExercise = typeof trackedExercises.$inferSelect;
