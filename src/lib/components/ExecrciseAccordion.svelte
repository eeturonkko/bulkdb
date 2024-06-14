<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import type { Exercise } from '$lib/db/schema';

	export let exercises: Exercise[];

	// Split exercises into two halves for rendering in two sections
	const half = Math.ceil(exercises.length / 2);
	const firstHalf = exercises.slice(0, half);
	const secondHalf = exercises.slice(half);
</script>

<div class="flex gap-6">
	<section class="flex-1">
		{#each firstHalf as { exerciseName, exerciseDescription }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content class="overflow-clip">{exerciseDescription}</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
	<section class="flex-1">
		{#each secondHalf as { exerciseName, exerciseDescription }}
			<Accordion.Root>
				<Accordion.Item value={exerciseName}>
					<Accordion.Trigger>{exerciseName}</Accordion.Trigger>
					<Accordion.Content class="overflow-clip">{exerciseDescription}</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		{/each}
	</section>
</div>
