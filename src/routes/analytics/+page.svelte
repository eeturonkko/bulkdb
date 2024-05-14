<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

	interface AverageWeight {
		week_name: string;
		average_weight: string;
	}

	interface PageData {
		averageWeights: AverageWeight[];
	}

	export let data: PageData;

	const avgWeights: number[] = data.averageWeights.map((d) => parseFloat(d.average_weight));

	let el: HTMLDivElement;

	onMount(() => {
		d3.select(el)
			.selectAll('div')
			.data(avgWeights)
			.enter()
			.append('div')
			.attr('class', 'bg-blue-500 text-white font-semibold px-1 my-0.5 text-start')
			.style('width', (d: number) => `${d * 10}px`)
			.text((d: number) => d.toString());
	});
</script>

<main class="flex flex-col items-center space-y-1">
	<h2 class="text-xl font-bold">Analytics</h2>
	<p class="text-lg text-gray-700 dark:text-white">Average weight per week (kg)</p>
	<div bind:this={el} class="chart"></div>
</main>
