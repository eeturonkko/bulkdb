<script lang="ts">
	import { ScrollText } from 'lucide-svelte';
	import type { trackedExercise } from '$lib/types';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import * as Accordion from '$lib/components/ui/accordion';

	export let trackedExercises: trackedExercise[];

	// Split exercises into two halves for rendering in two sections
	$: half = Math.ceil(trackedExercises.length / 2);
	$: firstHalf = trackedExercises.slice(0, half);
	$: secondHalf = trackedExercises.slice(half);
</script>

<div class="flex gap-6">
	<section class="flex-1">
		{#each firstHalf as { exerciseName, description }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content>
						<Button variant="ghost" class="my-2 border">
							<div class="flex items-center gap-2">
								<ScrollText size={14} />
								<span>Log</span>
							</div>
						</Button>
						<Table.Root>
							<Table.Caption class="text-start">{description}</Table.Caption>
							<Table.Header>
								<Table.Row>
									<Table.Head>Weight</Table.Head>
									<Table.Head>Reps</Table.Head>
									<Table.Head>Sets</Table.Head>
									<Table.Head>Date</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>60kg</Table.Cell>
									<Table.Cell>12</Table.Cell>
									<Table.Cell>3</Table.Cell>
									<Table.Cell>14/06/2024</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
	<section class="flex-1">
		{#each secondHalf as { exerciseName, description }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content>
						<Button>Log</Button>
						<Table.Root>
							<Table.Caption class="text-start">{description}</Table.Caption>
							<Table.Header>
								<Table.Row>
									<Table.Head>Weight</Table.Head>
									<Table.Head>Reps</Table.Head>
									<Table.Head>Sets</Table.Head>
									<Table.Head>Date</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row>
									<Table.Cell>60kg</Table.Cell>
									<Table.Cell>12</Table.Cell>
									<Table.Cell>3</Table.Cell>
									<Table.Cell>14/06/2024</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table.Root></Accordion.Content
					>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
</div>
