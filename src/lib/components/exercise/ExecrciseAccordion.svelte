<script lang="ts">
	import { Ellipsis } from 'lucide-svelte';
	import type { trackedExercise } from '$lib/types';
	import type { ExerciseLog } from '$lib/db/schema';
	import { formatDate } from '$lib/utils/functions';
	import * as Table from '$lib/components/ui/table';
	import LogExerciseSheet from './LogExerciseSheet.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Accordion from '$lib/components/ui/accordion';
	import ExerciseLogDropdownMenu from './ExerciseLogDropdownMenu.svelte';

	export let trackedExercises: trackedExercise[];
	export let exerciseLogs: ExerciseLog[];
</script>

<div class="grid grid-cols-2 gap-6">
	<section class="flex-1">
		{#each trackedExercises.filter((_, index) => index % 2 === 0) as { exerciseName, description, trackedExerciseId }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content>
						<div class="mx-1 flex justify-between">
							<LogExerciseSheet {trackedExerciseId} />
							<ExerciseLogDropdownMenu {trackedExerciseId} />
						</div>
						<Separator class="mt-2" />
						<Table.Root>
							<Table.Caption class="text-start">{description}</Table.Caption>
							<Table.Header>
								<Table.Row>
									<Table.Head>Weight</Table.Head>
									<Table.Head>Reps</Table.Head>
									<Table.Head>Date</Table.Head>
									<Table.Head>Actions</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each exerciseLogs as log}
									{#if log.trackedExerciseId === trackedExerciseId}
										<Table.Row>
											<Table.Cell>{log.weight} kg</Table.Cell>
											<Table.Cell>{log.reps}</Table.Cell>
											<Table.Cell>{formatDate(log.date)}</Table.Cell>
											<Table.Cell>
												<Ellipsis />
											</Table.Cell>
										</Table.Row>
									{/if}
								{/each}
							</Table.Body>
						</Table.Root>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
	<section class="flex-1">
		{#each trackedExercises.filter((_, index) => index % 2 !== 0) as { exerciseName, description, trackedExerciseId }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content>
						<div class="mx-1 flex justify-between">
							<LogExerciseSheet {trackedExerciseId} />
							<ExerciseLogDropdownMenu {trackedExerciseId} />
						</div>
						<Separator class="mt-2" />
						<Table.Root>
							<Table.Caption class="text-start">{description}</Table.Caption>
							<Table.Header>
								<Table.Row>
									<Table.Head>Weight</Table.Head>
									<Table.Head>Reps</Table.Head>
									<Table.Head>Date</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								{#each exerciseLogs as log}
									{#if log.trackedExerciseId === trackedExerciseId}
										<Table.Row>
											<Table.Cell>{log.weight} kg</Table.Cell>
											<Table.Cell>{log.reps}</Table.Cell>
											<Table.Cell>{formatDate(log.date)}</Table.Cell>
										</Table.Row>
									{/if}
								{/each}
							</Table.Body>
						</Table.Root>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
</div>
