<script lang="ts">
	import { enhance } from '$app/forms';
	import Input from './ui/input/input.svelte';
	import avatar from '$lib/assets/avatar.jpg';
	import Button from './ui/button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
</script>

<div class="w-full max-w-2xl space-y-6">
	<div class="flex items-center space-x-3">
		<Avatar.Root>
			<Avatar.Image src={avatar} alt="@awonfs" />
			<Avatar.Fallback>ER</Avatar.Fallback>
		</Avatar.Root>
		<div class="flex-1">
			<form use:enhance method="post" action="?/addComment" class="flex items-center space-x-3">
				<Input
					class="flex h-10 w-full flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					placeholder="Leave a comment..."
					type="text"
				/>
				<Button
					class="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
					type="submit"
				>
					Post Comment
				</Button>
			</form>
		</div>
	</div>
	<div class="space-y-6"></div>
</div>
