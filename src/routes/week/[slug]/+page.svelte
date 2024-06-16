<script lang="ts">
	import type { PageData } from './$types';
	import { Badge } from '$lib/components/ui/badge';
	import * as Table from '$lib/components/ui/table';
	import WeightChange from '$lib/components/weight/WeightChange.svelte';
	import WeekComments from '$lib/components/week/WeekComments.svelte';
	import WeekDropdownMenu from '$lib/components/week/WeekDropdownMenu.svelte';
	import WeightDropdowMenu from '$lib/components/weight/WeightDropdowMenu.svelte';
	import { calculateDifferences, formatDate } from '$lib/utils/functions';

	export let data: PageData;

	$: siteTitle = `Bulkdb | ${data.week[0]?.name}` || 'Bulkdb | Weight';
	$: enhancedWeights = calculateDifferences(data.weights);

	$: startingWeight = data.weights[0]?.weight || 0;
	$: currentWeight = data.weights[data.weights.length - 1]?.weight || 0;
	$: averageWeight = +(
		data.weights.reduce((acc, { weight }) => acc + weight, 0) / data.weights.length
	).toFixed(2);
	$: comments = data.comments;

	// Save these for possible future use
	/*  $: averageWeightChange = +(totalWeightChange / data.weights.length).toFixed(2);
	$: weightChangeColor = getColorByWeightChange(totalWeightChange);
  $: totalWeightChange = +(currentWeight - startingWeight).toFixed(2); */
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
	<div class="flex items-center justify-between">
		<div class="space-y-4">
			<h2 class="text-lg font-semibold md:text-2xl">{data.week[0]?.name}</h2>
			<Badge
				class={data.week[0]?.target === 'Bulk'
					? 'bg-green-700 text-white'
					: 'bg-red-700 text-white'}>{data.week[0]?.target} week</Badge
			>
		</div>
		<WeekDropdownMenu weekId={data.week[0]?.id} isArchived={data.week[0]?.isArchived} />
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
							<WeightDropdowMenu weightId={weight.id} />
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<div class="flex flex-col items-center gap-4">
		<WeightChange {startingWeight} {currentWeight} {averageWeight} />
		<WeekComments weekId={data.week[0]?.id} {comments} />
	</div>
</main>
