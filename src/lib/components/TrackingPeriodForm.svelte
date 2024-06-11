<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form use:enhance method="post" action="?/addNewTrackingPeriod" class="space-y-4">
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
			name="name"
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
				name="startDate"
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
				name="endDate"
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
