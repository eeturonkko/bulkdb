<script>
	import '../app.pcss';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<Sidebar />
	<main class="container">
		<slot></slot>
	</main>
</div>
