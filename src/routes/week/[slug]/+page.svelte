<script lang="ts">
	import { enhance } from '$app/forms';
	import { SquareX } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { Badge } from '$lib/components/ui/badge';
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/ui/button/button.svelte';
	import WeightChange from '$lib/components/WeightChange.svelte';
	import { getColorByWeightChange, calculateDifferences, formatDate } from '$lib/utils/functions';

	export let data: PageData;

	$: siteTitle = `Bulkdb | ${data.week[0]?.name}` || 'Bulkdb | Weight';
	$: enhancedWeights = calculateDifferences(data.weights);

	$: startingWeight = data.weights[0]?.weight || 0;
	$: currentWeight = data.weights[data.weights.length - 1]?.weight || 0;
	$: totalWeightChange = +(currentWeight - startingWeight).toFixed(2);
	$: averageWeight = +(
		data.weights.reduce((acc, { weight }) => acc + weight, 0) / data.weights.length
	).toFixed(2);
	$: weightChangeColor = getColorByWeightChange(totalWeightChange);
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
	<div class="flex items-center justify-between">
		<div class="space-y-4">
			<h2 class="text-lg font-semibold md:text-2xl">{data.week[0]?.name} weights</h2>
			<Badge
				class={data.week[0]?.target === 'Bulk'
					? 'bg-green-700 text-white'
					: 'bg-red-700 text-white'}>{data.week[0]?.target} week</Badge
			>
		</div>
		<form use:enhance action="?/deleteWeek" method="post">
			<input type="hidden" name="id" value={data.week[0]?.id} />
			<Button type="submit" variant="destructive">Delete week</Button>
		</form>
	</div>
	<div class="rounded-lg border shadow-sm">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Date</Table.Head>
					<Table.Head>Weight (kg)</Table.Head>
					<Table.Head>Difference to day before</Table.Head>
					<Table.Head>Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each enhancedWeights as { weight, difference }}
					<Table.Row>
						<Table.Cell>{formatDate(weight.date)}</Table.Cell>
						<Table.Cell>{weight.weight} kg</Table.Cell>
						<Table.Cell>
							<span
								class={difference === 0
									? 'text-yellow-400'
									: difference > 0
										? 'text-green-500'
										: 'text-red-500'}
							>
								{difference === 0 ? '0 kg' : `${difference > 0 ? '+' : ''}${difference} kg`}
							</span>
						</Table.Cell>
						<Table.Cell>
							<form use:enhance action="?/deleteWeightEntry" method="post">
								<input type="hidden" name="id" value={weight.id} />
								<Button variant="ghost" type="submit"><SquareX /></Button>
							</form>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<WeightChange
		{startingWeight}
		{currentWeight}
		{totalWeightChange}
		{weightChangeColor}
		{averageWeight}
	/>
</main>
