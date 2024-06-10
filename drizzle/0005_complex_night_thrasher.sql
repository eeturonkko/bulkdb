CREATE TABLE IF NOT EXISTS "exercise_logs" (
	"log_id" serial PRIMARY KEY NOT NULL,
	"period_id" serial NOT NULL,
	"exercise_id" serial NOT NULL,
	"weight" real NOT NULL,
	"reps" real NOT NULL,
	"sets" real NOT NULL,
	"created_at" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "exercises" (
	"exercise_id" serial PRIMARY KEY NOT NULL,
	"exercise_name" text NOT NULL,
	"exercise_description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tracking_periods" (
	"period_id" serial PRIMARY KEY NOT NULL,
	"period_name" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exercise_logs" ADD CONSTRAINT "exercise_logs_period_id_tracking_periods_period_id_fk" FOREIGN KEY ("period_id") REFERENCES "public"."tracking_periods"("period_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exercise_logs" ADD CONSTRAINT "exercise_logs_exercise_id_exercises_exercise_id_fk" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercises"("exercise_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
