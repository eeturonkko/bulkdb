<script lang="ts">
	import { enhance } from '$app/forms';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="rounded-lg px-6 shadow-md">
	<form use:enhance class="space-y-4 py-6" action="?/addNewWeek" method="post">
		<div class="space-y-4 text-start">
			<h2 class="text-lg font-medium">Create New week for tracking</h2>
			<div class="space-y-4">
				<Label for="week">Name for the week</Label>
				<Input required name="week" id="week" placeholder="Week 1 etc..." type="text" />
			</div>
			<div class="flex flex-col gap-4">
				<Label for="target">Target</Label>
				<div class="flex gap-2">
					<input required name="target" id="bulk" type="radio" value="Bulk" />
					<Label for="bulk">Bulk</Label>
				</div>
				<div class="flex gap-2">
					<input required name="target" id="cut" type="radio" value="Cut" />
					<Label for="cut">Cut</Label>
				</div>
			</div>
			<Button type="submit" size="lg" class="w-full">Create</Button>
		</div>
	</form>
</div>
