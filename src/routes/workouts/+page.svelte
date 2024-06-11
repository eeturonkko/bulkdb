<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import ExerciseForm from '$lib/components/ExerciseForm.svelte';
	import TrackingPeriodForm from '$lib/components/TrackingPeriodForm.svelte';
	import TrackingPeriodTable from '$lib/components/TrackingPeriodTable.svelte';

	export let data;
	$: trackingPeriods = data.trackingPeriods;
</script>

<svelte:head>
	<title>Bulkdb | Workouts</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<div class="mb-8 space-y-4 rounded-lg p-6 shadow-md">
			<h2 class="mb-4 text-xl font-bold">Create New Tracking Period</h2>
			<TrackingPeriodForm />
			<Separator />
			<h2 class="mb-4 text-xl font-bold">Add exercises</h2>
			<ExerciseForm />
		</div>
		<TrackingPeriodTable {trackingPeriods} />
	</div>
</div>
