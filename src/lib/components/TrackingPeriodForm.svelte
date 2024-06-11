<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<form use:enhance method="post" action="?/addNewTrackingPeriod" class="space-y-4">
	<div class="space-y-2">
		<Label for="name">Period Name</Label>
		<Input type="text" id="name" name="name" placeholder="Enter period name" />
	</div>
	<div class="flex gap-4">
		<div class="flex flex-1 flex-col gap-2">
			<Label for="startDate">Start Date</Label>
			<Input type="date" id="startDate" name="startDate" />
		</div>
		<div class="flex flex-1 flex-col gap-2">
			<Label for="endDate">End Date (Optional)</Label>
			<Input type="date" id="endDate" name="endDate" />
		</div>
	</div>
	<Button type="submit">Create Tracking Period</Button>
</form>
