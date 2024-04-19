CREATE TABLE IF NOT EXISTS "daily_weight" (
	"id" serial PRIMARY KEY NOT NULL,
	"weight" real NOT NULL,
	"date" date,
	"week_id" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "weeks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" date
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "daily_weight" ADD CONSTRAINT "daily_weight_week_id_weeks_id_fk" FOREIGN KEY ("week_id") REFERENCES "weeks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
