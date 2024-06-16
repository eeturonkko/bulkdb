<script lang="ts">
	import { enhance } from '$app/forms';
	import { Ellipsis } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	export let weekId: number;
	export let isArchived: boolean;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger><Ellipsis /></DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			{#if !isArchived}
				<DropdownMenu.Item>
					<form use:enhance action="?/archiveWeek" method="post">
						<input type="hidden" name="id" value={weekId} />
						<button type="submit">Archive week</button>
					</form>
				</DropdownMenu.Item>
			{/if}
			<DropdownMenu.Item>
				<form use:enhance action="?/deleteWeek" method="post">
					<input type="hidden" name="id" value={weekId} />
					<button type="submit">Delete week</button>
				</form>
			</DropdownMenu.Item>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
