<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { weeksStore } from '../../../store';
</script>

<div class="rounded-lg px-6 shadow-md">
	<form use:enhance class="space-y-4 py-6" action="?/addNewDailyWeight" method="post">
		<div class="space-y-4 text-start">
			<h2 class="text-lg font-medium">Add Daily Weight</h2>
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
					{#each $weeksStore as { id, name, isArchived }}
						{#if !isArchived}
							<option value={id}>{name}</option>
						{/if}
					{/each}
				</select>
			</div>
			<div class="grid gap-2">
				<Label for="date">Date</Label>
				<Input type="date" name="date" />
			</div>
			<Button type="submit" size="lg" class="w-full">Add</Button>
		</div>
	</form>
</div>
