<script>
	import { setMouseOnLink, setMouseOffLink } from '$lib/functions/mouse.js';
	import { onDestroy } from 'svelte';

	onDestroy(async () => {
		setMouseOffLink();
	});
</script>

<slot />

<a
	on:mouseenter={() => setMouseOnLink()}
	on:mouseleave={() => setMouseOffLink()}
	href="/"
	class="centreButton">return</a
>
