<script lang="ts">
	import { formatDate } from '$lib/utils/functions.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import ExecrciseAccordion from '$lib/components/ExecrciseAccordion.svelte';
	import TrackExerciseSheet from '$lib/components/TrackExerciseSheet.svelte';

	export let data;
	$: trackingPeriod = data.trackingPeriod[0];
	$: exercises = data.exercises;
	$: trackedExercises = data.trackedExercises;
</script>

<svelte:head>
	<title>Bulkdb | {trackingPeriod.periodName}</title>
</svelte:head>

<main class="flex flex-1 flex-col md:gap-8 md:p-6">
	<section class="flex justify-between">
		<div class="flex flex-col items-start">
			<h2 class="font-semibold md:text-2xl">{trackingPeriod.periodName}</h2>
			<p class="text-muted-foreground">
				{formatDate(trackingPeriod.startDate)} - {trackingPeriod.endDate
					? formatDate(trackingPeriod.endDate)
					: 'Present'}
			</p>
		</div>
		<TrackExerciseSheet {exercises} trackingPeriodId={trackingPeriod.periodId} />
	</section>
	<Separator />
	<h2 class="font-semibold md:text-2xl">Tracked Exercises</h2>
	<div class="flex gap-6">
		<section class="flex-1">
			<ExecrciseAccordion {trackedExercises} />
		</section>
	</div>
</main>
