<script lang="ts">
	import '../app.pcss';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutData } from './$types';
	import { weeksStore } from '../store';
	import { setContext } from 'svelte';

	// Retrieve weeks from db
	export let data: LayoutData;
	// Set weeks in weeks store and context
	$: weeksStore.set(data.weeks);
	setContext('weeks', $weeksStore);
</script>

<ModeWatcher />
<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<Sidebar />
	<main class="container">
		<slot></slot>
	</main>
</div>
