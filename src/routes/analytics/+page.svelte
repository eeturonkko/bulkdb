<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="container mx-auto space-y-3">
	<h2>Analytics</h2>
	<span> Average weights for each week </span>
	{#each data.averageWeights as { week_name, average_weight }}
		<p>{week_name}: {average_weight} Kg</p>
	{/each}
</main>
