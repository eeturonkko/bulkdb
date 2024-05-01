<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.week[0].name}</title>
</svelte:head>

{#each data.week as week}
	<h1>{week.name}</h1>
	<p>{week.id}</p>
{/each}
