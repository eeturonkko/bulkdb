<script lang="ts">
	import FormTabs from '$lib/components/FormTabs.svelte';
</script>

<svelte:head>
	<title>Bulkdb | Home</title>
</svelte:head>

<div class="flex flex-col items-center text-center tracking-wide">
	<h1 class="text-3xl font-bold">Bulkdb</h1>
	<p class="mb-8 text-lg text-gray-700 dark:text-white">
		Start by adding a new week or add your daily weight
	</p>
	<FormTabs />
</div>
