<script lang="ts">
	import { weeksStore } from '../../../store';
	import ThemeToggleButton from './ThemeToggleButton.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { CalendarDays, Home, AreaChart, Archive, Dumbbell } from 'lucide-svelte';

	$: weeksStores = weeksStore;
</script>

<ScrollArea
	class="sm:w-23 fixed inset-y-0 left-0 z-10 hidden w-52 flex-col border-r bg-background sm:flex"
>
	<div class="p-4">
		<div class="flex flex-col items-start justify-center gap-4">
			<div class=" flex w-full items-center justify-between">
				<!-- <div class="flex h-10 w-24 items-center justify-center rounded-sm bg-primary">
					<span class="font-bold tracking-wide text-white">Bulkdb</span>
				</div> -->
				<a class="flex items-center" href="/" rel="ugc">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-6 w-6 text-primary"
					>
						<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
						<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
						<path d="M3 12A9 3 0 0 0 21 12"></path>
					</svg>
					<span class="ml-2 text-lg font-bold">BulkDB</span>
				</a>
				<ThemeToggleButton />
			</div>
			<a class="flex items-center gap-2 text-gray-700 dark:text-white" href="/"><Home />Home </a>
			<a class="flex items-center gap-2 text-gray-700 dark:text-white" href="/analytics">
				<AreaChart /> Analytics</a
			>
			<a class="flex items-center gap-2 text-gray-700 dark:text-white" href="/archive">
				<Archive /> Archive</a
			>
			<a class="flex items-center gap-2 text-gray-700 dark:text-white" href="/workouts">
				<Dumbbell /> Workouts
			</a>
			<Separator class="mb-4" />
		</div>

		{#each $weeksStores as { id, name, isArchived }}
			{#if !isArchived}
				<a href={`/week/${id}`} class="flex items-center gap-2 text-gray-700 dark:text-white">
					<CalendarDays size={20} />
					{name}
				</a>
				<Separator class="my-2" />
			{/if}
		{/each}
	</div>
</ScrollArea>
