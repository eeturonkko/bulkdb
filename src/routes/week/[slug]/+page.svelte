<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.week as week}
	<h1>{week.name}</h1>
	<p>{week.id}</p>
{/each}
