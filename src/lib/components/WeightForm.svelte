<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import Label from './ui/label/label.svelte';
	import Input from './ui/input/input.svelte';
	import Button from './ui/button/button.svelte';
</script>

<Card.Root class="mt-8 py-6">
	<Card.Content class="space-y-4 text-start">
		<div class="space-y-2">
			<Label for="weight">Weight (kg)</Label>
			<Input id="weight" placeholder="70" type="number" />
		</div>
		<div class="grid gap-2">
			<Label for="week">Week</Label>
			<Select.Root>
				<Select.Trigger class="w-[180px]">
					<Select.Value placeholder="Select week" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="1">Week 1</Select.Item>
					<Select.Item value="2">Week 2</Select.Item>
					<Select.Item value="3">Week 3</Select.Item>
					<Select.Item value="4">Week 4</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
		<div class="grid gap-2">
			<Label for="date">Date</Label>
			<Input type="date" />
		</div>
		<Button size="lg">Submit</Button>
	</Card.Content>
</Card.Root>
