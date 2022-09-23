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
	<div class="text">
		<h2>SiiiGNAL</h2>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: calc(100vh - 50px);
		max-height: calc(100vh - 50px);
	}

	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 0 4rem;
		display: flex;
		justify-content: space-between;
		user-select: none;
	}

	.text h2 {
		font-size: 150px;
		line-height: 150px;
		height: 200px;
		user-select: none;
		font-family: nb-television-2d, sans-serif;
		padding: 2rem;
	}
</style>
