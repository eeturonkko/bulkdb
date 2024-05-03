<script lang="ts">
	export let averageWeight: number;
	export let currentWeight: number;
	export let startingWeight: number;
	export let totalWeightChange: number;
	export let weightChangeColor: string;
</script>

<section class="md:py-8 lg:py-8">
	<div class="container mx-auto px-4 md:px-6">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8 lg:gap-10">
			<div
				class="flex flex-col items-center justify-center rounded-lg transition-all hover:scale-105 md:p-8"
			>
				<h3 class="mb-2 text-base font-medium text-gray-500 dark:text-gray-400">Starting Weight</h3>
				<p class="text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-4xl">
					{startingWeight} kg
				</p>
			</div>
			<div
				class="flex flex-col items-center justify-center rounded-lg transition-all hover:scale-105 md:p-8"
			>
				<h3 class="mb-2 text-base font-medium text-gray-500 dark:text-gray-400">Current Weight</h3>
				<p class="text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-4xl">
					{currentWeight} kg
				</p>
			</div>
			<div
				class=" flex flex-col items-center justify-center rounded-lg transition-all hover:scale-105 md:p-8"
			>
				<h3 class="mb-2 text-base font-medium text-gray-500 dark:text-gray-400">Average Weight</h3>
				<p class="text-4xl font-bold text-gray-900 dark:text-gray-50 md:text-4xl">
					{averageWeight} kg
				</p>
			</div>
			<div
				class="flex flex-col items-center justify-center rounded-lg transition-all hover:scale-105 md:p-8"
			>
				<h3 class="mb-2 text-base font-medium text-gray-500 dark:text-gray-400">
					Total Weight Change
				</h3>
				<p class={`text-4xl font-bold ${weightChangeColor} md:text-4xl`}>
					{totalWeightChange === 0
						? '0 kg'
						: `${totalWeightChange > 0 ? '+' : ''}${totalWeightChange} kg`}
				</p>
			</div>
		</div>
	</div>
</section>
