<script lang="ts">
	import { enhance } from '$app/forms';
	import { Ellipsis } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	export let trackedExerciseId: number;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger><Ellipsis /></DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<form use:enhance method="post">
					<input type="hidden" name="id" />
					<button type="submit">Modify</button>
				</form>
			</DropdownMenu.Item>
			<DropdownMenu.Item>
				<form use:enhance method="post" action="?/removeTrackedExercise">
					<input type="hidden" name="id" value={trackedExerciseId} />
					<button type="submit">Remove exercise</button>
				</form>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
