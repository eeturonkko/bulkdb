<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Label from './ui/label/label.svelte';
	import Input from './ui/input/input.svelte';
	import Button from './ui/button/button.svelte';
</script>

<Card.Root class="mt-8  py-6">
	<Card.CardHeader class="text-start">
		<Card.Title>Create New week for tracking</Card.Title>
	</Card.CardHeader>
	<Card.Content class="space-y-4 text-start">
		<div class="space-y-2">
			<Label for="week">Name for the week</Label>
			<Input id="week" placeholder="Week 1 etc..." type="text" />
		</div>
		<Button size="lg">Create</Button>
	</Card.Content>
</Card.Root>
