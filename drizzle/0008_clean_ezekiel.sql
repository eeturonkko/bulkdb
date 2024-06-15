CREATE TABLE IF NOT EXISTS "tracked_exercises" (
	"tracked_exercise_id" serial PRIMARY KEY NOT NULL,
	"period_id" serial NOT NULL,
	"exercise_id" serial NOT NULL
);
--> statement-breakpoint
ALTER TABLE "exercise_logs" DROP CONSTRAINT "exercise_logs_period_id_tracking_periods_period_id_fk";
--> statement-breakpoint
ALTER TABLE "exercise_logs" DROP CONSTRAINT "exercise_logs_exercise_id_exercises_exercise_id_fk";
--> statement-breakpoint
ALTER TABLE "exercise_logs" ADD COLUMN "tracked_exercise_id" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tracked_exercises" ADD CONSTRAINT "tracked_exercises_period_id_tracking_periods_period_id_fk" FOREIGN KEY ("period_id") REFERENCES "public"."tracking_periods"("period_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tracked_exercises" ADD CONSTRAINT "tracked_exercises_exercise_id_exercises_exercise_id_fk" FOREIGN KEY ("exercise_id") REFERENCES "public"."exercises"("exercise_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "exercise_logs" ADD CONSTRAINT "exercise_logs_tracked_exercise_id_tracked_exercises_tracked_exercise_id_fk" FOREIGN KEY ("tracked_exercise_id") REFERENCES "public"."tracked_exercises"("tracked_exercise_id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "exercise_logs" DROP COLUMN IF EXISTS "period_id";--> statement-breakpoint
ALTER TABLE "exercise_logs" DROP COLUMN IF EXISTS "exercise_id";