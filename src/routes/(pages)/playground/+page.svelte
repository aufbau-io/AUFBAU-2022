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
		background: var(--white);
	}
</style>
