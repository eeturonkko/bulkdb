<script lang="ts">
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	const tags = Array.from({ length: 30 }).map((_, i) => `Week ${i + 1}`);
</script>

<ScrollArea
	class="sm:w-23 fixed inset-y-0 left-0 z-10 hidden w-48 flex-col border-r bg-background sm:flex"
>
	<div class="p-4">
		<div class="flex flex-col items-start justify-center gap-4">
			<ThemeToggleButton />
			<h3 class="mb-4 text-lg font-semibold leading-none">Weeks</h3>
		</div>
		{#each tags as tag, i}
			<a href={`/week/${i + 1}`} class="text-sm text-gray-700 dark:text-white">
				{tag}
			</a>
			<Separator class="my-2" />
		{/each}
	</div>
</ScrollArea>
