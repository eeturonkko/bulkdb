<script lang="ts">
	import FormTabs from '$lib/components/ui/FormTabs.svelte';
</script>

<svelte:head>
	<title>Bulkdb | Home</title>
</svelte:head>

<div class="flex flex-col items-center text-center tracking-wide">
	<div class="mb-4">
		<h1 class="text-3xl font-bold">Welcome to Bulkdb!</h1>
		<p class=" text-lg">Track, analyze and improve your workouts and diet with Bulkdb.</p>
	</div>
	<FormTabs />
</div>
