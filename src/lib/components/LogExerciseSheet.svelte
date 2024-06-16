<script lang="ts">
	import { enhance } from '$app/forms';
	import { ScrollText } from 'lucide-svelte';
	import Label from './ui/label/label.svelte';
	import Input from './ui/input/input.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import Separator from './ui/separator/separator.svelte';

	export let trackedExerciseId: number;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<div class="flex cursor-pointer items-center gap-2 rounded-lg border border-primary px-4 py-1">
			<ScrollText size={14} />
			<span>Log</span>
		</div>
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Log exercise</Sheet.Title>
			<Separator />
			<form class="space-y-3" use:enhance method="post" action="?/logExercise">
				<input type="hidden" value={trackedExerciseId} name="exerciseId" />
				<Label for="weight">Weight</Label>
				<Input id="weight" name="weight" type="number" step="0.1" />
				<Label for="reps">Reps</Label>
				<Input id="reps" name="reps" type="number" />
				<Label for="sets">Sets</Label>
				<Input id="sets" name="sets" type="number" />
				<Label for="date">Date</Label>
				<Input type="date" name="date" />
				<Button type="submit">Track exercise</Button>
			</form>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
