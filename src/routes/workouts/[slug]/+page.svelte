<script lang="ts">
	import { formatDate } from '$lib/utils/functions.js';
	export let data;
	$: trackingPeriod = data.trackingPeriod[0];
</script>

<svelte:head>
	<title>Bulkdb | {trackingPeriod.periodName}</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
	<div class="flex flex-col items-start">
		<h2 class="font-semibold md:text-2xl">{trackingPeriod.periodName}</h2>
		<p class="text-muted-foreground">
			{formatDate(trackingPeriod.startDate)} - {trackingPeriod.endDate
				? formatDate(trackingPeriod.endDate)
				: 'Present'}
		</p>
	</div>
</main>
