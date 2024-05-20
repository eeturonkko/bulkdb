<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import { ArchiveRestore } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
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
				{#each data.weeks as { id, name, isArchived }}
					{#if isArchived}
						<Table.Row>
							<Table.Cell>
								<a href={`/week/${id}`}>{name}</a>
							</Table.Cell>
							<Table.Cell>
								<form use:enhance action="?/restoreWeek" method="post">
									<input type="hidden" name="id" value={id} />
									<Button variant="ghost" type="submit"><ArchiveRestore size={20} /></Button>
								</form>
							</Table.Cell>
						</Table.Row>
					{/if}
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</main>
