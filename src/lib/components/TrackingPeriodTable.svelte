<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import type { TrackingPeriod } from '$lib/db/schema';

	export let trackingPeriods: TrackingPeriod[];
</script>

<div class="rounded-lg p-6 shadow-md">
	<h2 class="mb-4 text-xl font-bold">Existing Tracking Periods</h2>

	<Table.Root class="w-full caption-bottom text-sm">
		<Table.Header>
			<Table.Row>
				<Table.Head>Period Name</Table.Head>
				<Table.Head>Start Date</Table.Head>
				<Table.Head>End Date</Table.Head>
				<Table.Head>Actions</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each trackingPeriods as period}
				<Table.Row>
					<Table.Cell>{period.periodName}</Table.Cell>
					<Table.Cell>{period.startDate.toLocaleDateString()}</Table.Cell>
					<Table.Cell
						>{period.endDate ? period.endDate.toLocaleDateString() : 'End date not set'}</Table.Cell
					>
					<Table.Cell>
						<Button>
							<a href={`/workouts/${period.periodId}`}> View/Edit </a>
						</Button>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
