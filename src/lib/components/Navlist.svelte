<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	import { weeksStore } from '../../store';
	import { Home } from 'lucide-svelte';
</script>

<ScrollArea
	class="sm:w-23 fixed inset-y-0 left-0 z-10 hidden w-48 flex-col border-r bg-background sm:flex"
>
	<div class="p-4">
		<div class="flex flex-col items-start justify-center gap-4">
			<div class="flex w-full items-center justify-between">
				<a href="/"><Home /></a>
				<ThemeToggleButton />
			</div>
			<h3 class="mb-4 text-lg font-semibold leading-none">Weeks</h3>
		</div>
		{#each $weeksStore as { id, name }}
			<a href={`/week/${id}`} class="text-sm text-gray-700 dark:text-white">
				{name}
			</a>
			<Separator class="my-2" />
		{/each}
	</div>
</ScrollArea>
