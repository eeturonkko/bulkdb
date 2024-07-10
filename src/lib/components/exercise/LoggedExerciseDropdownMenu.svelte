<script lang="ts">
	import { enhance } from '$app/forms';
	import { Ellipsis } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	export let loggedExerciseId: number;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger><Ellipsis /></DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<form use:enhance method="post" action="?/removeLoggedExercise">
					<input type="hidden" name="id" value={loggedExerciseId} />
					<button type="submit">Remove exercise</button>
				</form>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
