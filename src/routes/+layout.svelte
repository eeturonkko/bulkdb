<script lang="ts">
	import '../app.pcss';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { LayoutData } from './$types';

	// Get weeks from layout load function
	export let data: LayoutData;
	// Create store for weeks
	const weeks = writable();
	$: weeks.set(data.weeks);
	// Set weeks context for children
	setContext('weeks', data.weeks);
</script>

<ModeWatcher />
<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<Sidebar />
	<main class="container">
		<slot></slot>
	</main>
</div>
