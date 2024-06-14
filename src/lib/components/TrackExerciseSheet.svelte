<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<Button>Track exercise</Button>
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Add exercise to tracking period</Sheet.Title>
			<Sheet.Description>
				Select an exercice from the list to add to the tracking period
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
