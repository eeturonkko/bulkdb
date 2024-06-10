<script lang="ts">
</script>

<svelte:head>
	<title>Bulkdb | Workouts</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<div class="mb-8 rounded-lg p-6 shadow-md">
			<h2 class="mb-4 text-xl font-bold">Create New Tracking Period</h2>
			<form class="space-y-4">
				<div>
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="name"
					>
						Period Name
					</label>
					<input
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						id="name"
						placeholder="Enter period name"
					/>
				</div>
				<div class="flex gap-4">
					<div class="flex flex-1 flex-col gap-1">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="startDate"
						>
							Start Date
						</label>
						<input
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							type="date"
							id="startDate"
						/>
					</div>
					<div class="flex flex-1 flex-col gap-1">
						<label
							class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							for="endDate"
						>
							End Date (Optional)
						</label>
						<input
							class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							type="date"
							id="endDate"
						/>
					</div>
				</div>
				<button
					class="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					type="submit"
				>
					Create Tracking Period
				</button>
			</form>
		</div>
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
						<tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">Winter Cut</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">2023-10-01</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">2024-04-30</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">
								<button
									class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								>
									View/Edit
								</button>
							</td>
						</tr>
						<tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">Summer Bulk</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">2023-07-01</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">2023-07-31</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">
								<button
									class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								>
									View/Edit
								</button>
							</td>
						</tr>
						<tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">Fall Mini Cut</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">2023-08-01</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">2023-08-31</td>
							<td class="[&amp;:has([role=checkbox])]:pr-0 p-4 align-middle">
								<button
									class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								>
									View/Edit
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
