<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
</script>

<div class="flex gap-6">
	<section class="flex-1">
		<Accordion.Root>
			<Accordion.Item value="Incline Machine Press">
				<Accordion.Trigger>Incline Machine Press</Accordion.Trigger>
				<Accordion.Content>3 sets of 10 reps</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="Belt squat">
				<Accordion.Trigger>Belt squat</Accordion.Trigger>
				<Accordion.Content>3 sets of 10 reps</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
	<section class="flex-1">
		<Accordion.Root>
			<Accordion.Item value="Seated Machine Press">
				<Accordion.Trigger>Seated Machine Press</Accordion.Trigger>
				<Accordion.Content>3 sets of 10 reps</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="Lat pullover Machine">
				<Accordion.Trigger>Lat pullover Machine</Accordion.Trigger>
				<Accordion.Content>3 sets of 10 reps</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</section>
</div>
