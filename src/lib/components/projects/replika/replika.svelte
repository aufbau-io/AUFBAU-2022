<script>
	import { onMount } from 'svelte';
	let Geometry;

	onMount(async () => {
		const module = await import('$lib/components/geometry/geometry.svelte');
		Geometry = module.default;
	});
</script>


<main>
  <svelte:component this={Geometry} />
</main>

<style>
	main {
    position: relative;
    width: calc(100vw - 490px);
	}
</style>
