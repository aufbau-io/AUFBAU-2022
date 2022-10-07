<script>
	import '../app.css';
	import { onMount } from 'svelte';
	let Geometry;
	onMount(async () => {
		const module = await import('./geometry.svelte');
		Geometry = module.default;
	});
</script>

<svelte:component this={Geometry} />
<slot />
