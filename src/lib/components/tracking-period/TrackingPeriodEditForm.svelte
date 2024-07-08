<script lang="ts">
	import { enhance } from '$app/forms';
	import Label from '../ui/label/label.svelte';
	import Input from '../ui/input/input.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '$lib/components/ui/button';
	import type { TrackingPeriod } from '$lib/db/schema';
	import Separator from '../ui/separator/separator.svelte';

	export let trackingPeriod: TrackingPeriod;
</script>

<Sheet.Root>
	<Sheet.Trigger>
		<Button>Edit</Button>
	</Sheet.Trigger>
	<Sheet.Content>
		<Sheet.Header>
			<Sheet.Title>Edit tracking period</Sheet.Title>

			<Separator />
			<form class="space-y-3" use:enhance method="post" action="?/editTrackingPeriod">
				<input type="hidden" value={trackingPeriod.periodId} name="periodId" />
				<Label for="periodName">Period Name</Label>
				<Input
					type="text"
					id="periodName"
					name="periodName"
					value={trackingPeriod.periodName}
					placeholder="Enter period name"
				/>
				<div class="flex flex-1 flex-col gap-2">
					<Label for="endDate">End Date</Label>
					<Input type="date" id="endDate" name="endDate" value={trackingPeriod.endDate} />
				</div>
				<Button type="submit">Edit period</Button>
			</form>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
