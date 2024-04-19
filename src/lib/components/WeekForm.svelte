<script lang="ts">
	import { enhance } from '$app/forms';
	import Label from './ui/label/label.svelte';
	import Input from './ui/input/input.svelte';
	import Button from './ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root class="mt-8 py-6">
	<Card.CardHeader class="text-start">
		<Card.Title>Create New week for tracking</Card.Title>
	</Card.CardHeader>
	<Card.Content class="space-y-4 text-start">
		<form use:enhance class="space-y-4" action="?/addNewWeek" method="post">
			<Label for="week">Name for the week</Label>
			<Input required name="week" id="week" placeholder="Week 1 etc..." type="text" />
			<Button type="submit" size="lg">Create</Button>
		</form>
	</Card.Content>
</Card.Root>
