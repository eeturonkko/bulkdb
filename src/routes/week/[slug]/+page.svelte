<script lang="ts">
	import type { PageData } from './$types';
	import * as Table from '$lib/components/ui/table';
	export let data: PageData;

	const { name } = data.week[0];

	const formatDate = (date: Date | null): string => {
		if (!date) return 'No Date';
		const d = new Date(date);
		return d.toISOString().split('T')[0]; // outputs YYYY-MM-DD
	};
</script>

<svelte:head>
	<title>{name || 'Weight Data'}</title>
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
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.weights as { weight, date }}
					<Table.Row>
						<Table.Cell>{formatDate(date)}</Table.Cell>
						<Table.Cell>{weight} kg</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</main>
