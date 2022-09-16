<script>
	import { onMount } from 'svelte';
	let Geometry;

	onMount(async () => {
		const module = await import('./Geometry.svelte');
		Geometry = module.default;
	});
</script>

<main>
	<svelte:component this={Geometry} />
</main>

<style>
	main {
		position: relative;
	}
</style>
