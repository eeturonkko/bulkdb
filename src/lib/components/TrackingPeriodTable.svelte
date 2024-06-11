<script lang="ts">
	export let trackingPeriods: TrackingPeriod[];
	import type { TrackingPeriod } from '$lib/db/schema';
</script>

<div class="rounded-lg p-6 shadow-md">
	<h2 class="mb-4 text-xl font-bold">Existing Tracking Periods</h2>
	<div class="relative w-full overflow-auto">
		<table class="w-full caption-bottom text-sm">
			<thead class="[&amp;_tr]:border-b">
				<tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
					<th
						class="[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle font-medium text-muted-foreground"
					>
						Period Name
					</th>
					<th
						class="[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle font-medium text-muted-foreground"
					>
						Start Date
					</th>
					<th
						class="[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle font-medium text-muted-foreground"
					>
						End Date
					</th>
					<th
						class="[&amp;:has([role=checkbox])]:pr-0 h-12 px-4 text-left align-middle font-medium text-muted-foreground"
					>
						Actions
					</th>
				</tr>
			</thead>
			<tbody class="[&amp;_tr:last-child]:border-0">
				{#each trackingPeriods as period}
					<tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
						<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">{period.periodName}</td>
						<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle"
							>{period.startDate.toLocaleDateString()}</td
						>
						<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle"
							>{period.endDate ? period.endDate.toLocaleDateString() : 'End date not set'}</td
						>
						<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">
							<button
								class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
							>
								View/Edit
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
