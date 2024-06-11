<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<form use:enhance method="post" action="?/addNewExercise" class="f space-y-4">
	<div class="flex gap-2">
		<div class="flex-1 space-y-2">
			<Label for="exercise">Exercise name</Label>
			<Input type="text" id="exercise" name="exercise" placeholder="Enter exercise name" />
		</div>
		<div class="flex-1 space-y-2">
			<Label for="description">Exercise Description</Label>
			<Input type="text" id="description" name="description" placeholder="Enter description" />
		</div>
	</div>
	<Button type="submit" class="w-full">Add exercise</Button>
</form>
