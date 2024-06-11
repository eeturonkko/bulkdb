<script lang="ts">
	import TrackingPeriodForm from '$lib/components/TrackingPeriodForm.svelte';
	import TrackingPeriodTable from '$lib/components/TrackingPeriodTable.svelte';
</script>

<svelte:head>
	<title>Bulkdb | Workouts</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<div class="mb-8 rounded-lg p-6 shadow-md">
			<h2 class="mb-4 text-xl font-bold">Create New Tracking Period</h2>
			<TrackingPeriodForm />
		</div>
		<TrackingPeriodTable />
	</div>
</div>
