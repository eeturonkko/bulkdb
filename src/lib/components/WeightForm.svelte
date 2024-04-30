<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Week } from '$lib/db/schema';

	import Label from './ui/label/label.svelte';
	import Input from './ui/input/input.svelte';
	import Button from './ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { getContext } from 'svelte';
	const weeks: Week[] = getContext('weeks');
</script>

<Card.Root class="mt-8  py-6">
	<Card.Content class="space-y-4 text-start">
		<form use:enhance action="?/addNewDailyWeight" class="space-y-4" method="post">
			<div class="space-y-2">
				<Label for="weight">Weight (kg)</Label>
				<Input name="weight" id="weight" placeholder="70" type="number" step="0.1" />
			</div>
			<div class="grid gap-2">
				<Label for="week">Week</Label>
				<select
					id="week"
					name="week"
					class="block h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none focus:ring focus:ring-opacity-50 dark:text-gray-400"
				>
					<option disabled selected>Select week</option>
					{#each weeks as week}
						<option class="dark:text black text-white" value={week.id}>{week.name}</option>
					{/each}
				</select>
			</div>
			<div class="grid gap-2">
				<Label for="date">Date</Label>
				<Input type="date" name="date" />
			</div>
			<Button type="submit" size="lg">Add</Button>
		</form>
	</Card.Content>
</Card.Root>
