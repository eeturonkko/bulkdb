ALTER TABLE "comments" DROP CONSTRAINT "comments_week_id_weeks_id_fk";
--> statement-breakpoint
ALTER TABLE "daily_weight" DROP CONSTRAINT "daily_weight_week_id_weeks_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_week_id_weeks_id_fk" FOREIGN KEY ("week_id") REFERENCES "public"."weeks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "daily_weight" ADD CONSTRAINT "daily_weight_week_id_weeks_id_fk" FOREIGN KEY ("week_id") REFERENCES "public"."weeks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
