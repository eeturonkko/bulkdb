<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
</script>

<Tabs.Root value="week" class="w-[400px]">
	<Tabs.List>
		<Tabs.Trigger value="week">New week</Tabs.Trigger>
		<Tabs.Trigger value="weight">Daily weight</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="week">Add new week</Tabs.Content>
	<Tabs.Content value="weight">Add you daily weight</Tabs.Content>
</Tabs.Root>
