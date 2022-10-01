<script>
	import { onMount } from 'svelte';

	let Geometry;

	onMount(async () => {
		const module = await import('./geometry.svelte');
		Geometry = module.default;
	});
</script>

<main>
	<svelte:component this={Geometry} />
</main>

<style>
	main {
		position: relative;
		height: 100vh;
		width: calc(100vw);
		background: var(--accent);
	}
</style>
