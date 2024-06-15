<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import type { trackedExercise } from '$lib/types';

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
					<Accordion.Content class="overflow-clip">{description}</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
	<section class="flex-1">
		{#each secondHalf as { exerciseName, description }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content class="overflow-clip">{description}</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
</div>
