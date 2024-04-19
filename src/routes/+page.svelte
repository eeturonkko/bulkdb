<script lang="ts">
	import FormTabs from '$lib/components/FormTabs.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: weeks = data.weeks;
	//TODO: Check if you can add weeks to a store so that it can be used in other components
</script>

<svelte:head>
	<title>Bulkdb | Home</title>
</svelte:head>

<div class="flex flex-col items-center text-center tracking-wide">
	<h1 class="text-3xl font-bold">Bulkdb</h1>
	<p class="mb-8 text-lg text-gray-700 dark:text-white">
		Start by adding a new week or add your daily weight
	</p>
	<FormTabs {weeks} />
</div>
