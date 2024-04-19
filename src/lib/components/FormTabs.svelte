<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import WeekForm from './WeekForm.svelte';
	import WeightForm from './WeightForm.svelte';
	import type { Week } from '$lib/db/schema';
	export let weeks: Week[];
</script>

<Tabs.Root value="week" class="w-[400px]">
	<Tabs.List>
		<Tabs.Trigger value="week">New week</Tabs.Trigger>
		<Tabs.Trigger value="weight">Daily weight</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="week">
		<WeekForm />
	</Tabs.Content>
	<Tabs.Content value="weight">
		<WeightForm {weeks} />
	</Tabs.Content>
</Tabs.Root>
