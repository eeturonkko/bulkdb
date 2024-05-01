<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	import { weeksStore } from '../../store';
	import { CalendarDays, Home } from 'lucide-svelte';

	$: weeksStores = weeksStore;
</script>

<ScrollArea
	class="sm:w-23 fixed inset-y-0 left-0 z-10 hidden w-48 flex-col border-r bg-background sm:flex"
>
	<div class="p-4">
		<div class="flex flex-col items-start justify-center gap-4">
			<div class=" flex w-full items-center justify-between">
				<a href="/"><Home /></a>
				<ThemeToggleButton />
			</div>
			<Separator class="mb-4" />
		</div>

		{#each $weeksStores as { id, name }}
			<a href={`/week/${id}`} class="flex items-center gap-2 text-gray-700 dark:text-white">
				<CalendarDays size={20} />
				{name}
			</a>
			<Separator class="my-2" />
		{/each}
	</div>
</ScrollArea>
