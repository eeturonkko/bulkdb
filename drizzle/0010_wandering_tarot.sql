CREATE TABLE IF NOT EXISTS "workouts" (
	"workout_id" serial PRIMARY KEY NOT NULL,
	"workout_name" text NOT NULL,
	"workout_description" text,
	"calories_burned" real NOT NULL,
	"duration" real NOT NULL
);
