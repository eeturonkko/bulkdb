<script lang="ts">
	import { enhance } from '$app/forms';
	import { Ellipsis } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	export let weightId: number;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger><Ellipsis /></DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item>
				<form use:enhance action="?/deleteWeightEntry" method="post">
					<input type="hidden" name="id" value={weightId} />
					<button type="submit">Delete</button>
				</form>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
