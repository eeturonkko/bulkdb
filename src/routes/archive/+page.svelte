<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	//export let data: PageData;
</script>

<svelte:head>
	<title>Bulkdb | Archive</title>
</svelte:head>

<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
	<div class="flex items-center justify-between"></div>
	<div class="rounded-lg border shadow-sm">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Week</Table.Head>
					<Table.Head>Actions</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>
						<a href="/week/2">Week 1 test</a>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<a href="/week/61">Week 2 test</a>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</div>
</main>
