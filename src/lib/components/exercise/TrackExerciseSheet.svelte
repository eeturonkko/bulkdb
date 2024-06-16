<script lang="ts">
	import { enhance } from '$app/forms';
	import Label from '../ui/label/label.svelte';
	import type { Exercise } from '$lib/db/schema';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import Separator from '../ui/separator/separator.svelte';

	export let exercises: Exercise[];
	export let trackingPeriodId: number;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<Button>Track exercise</Button>
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Add exercise to tracking period</Sheet.Title>
			<Sheet.Description>
				Select an exercice from the list to add to the tracking period
			</Sheet.Description>
			<Separator />
			<form class="space-y-3" use:enhance method="post" action="?/trackExercise">
				<Label class="sr-only" for="exercise">Exercise</Label>
				<select
					id="exercise"
					name="exerciseId"
					class="block h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring focus:ring-opacity-50 dark:text-gray-400"
				>
					<option disabled selected>Select exercise</option>
					{#each exercises as { exerciseId, exerciseName }}
						<option value={exerciseId}>{exerciseName}</option>
					{/each}
				</select>
				<input type="hidden" value={trackingPeriodId} name="periodId" />
				<Button type="submit">Track exercise</Button>
			</form>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
