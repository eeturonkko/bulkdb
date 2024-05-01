<script lang="ts">
	import type { PageData } from './$types';
	import * as Table from '$lib/components/ui/table';
	import WeightChange from '$lib/components/WeightChange.svelte';

	export let data: PageData;

	const formatDate = (date: Date | null): string => {
		if (!date) return 'No Date';
		return new Date(date).toISOString().split('T')[0]; // outputs YYYY-MM-DD
	};

	const calculateDifferences = () => {
		return data.weights.map((weight, index, weights) => {
			if (index === 0) return { ...weight, difference: 0 };
			const difference = weight.weight - weights[index - 1].weight;
			return { ...weight, difference: +difference.toFixed(2) }; // Round to two decimal places
		});
	};

	let enhancedWeights = calculateDifferences();

	const startingWeight = data.weights[0]?.weight || 0;
	const currentWeight = data.weights[data.weights.length - 1]?.weight || 0;
	const totalWeightChange = +(currentWeight - startingWeight).toFixed(2);
	const weightChangeColor =
		totalWeightChange === 0
			? 'text-yellow-400'
			: totalWeightChange > 0
				? 'text-green-500'
				: 'text-red-500';
</script>

<svelte:head>
	<title>Bulkdb | Weight data</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
	<div class="flex items-center">
		<h2 class="text-lg font-semibold md:text-2xl">Weight</h2>
	</div>
	<div class="rounded-lg border shadow-sm">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Date</Table.Head>
					<Table.Head>Weight (kg)</Table.Head>
					<Table.Head>Difference</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each enhancedWeights as { date, weight, difference }}
					<Table.Row>
						<Table.Cell>{formatDate(date)}</Table.Cell>
						<Table.Cell>{weight} kg</Table.Cell>
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
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
	<WeightChange {startingWeight} {currentWeight} {totalWeightChange} {weightChangeColor} />
</main>
