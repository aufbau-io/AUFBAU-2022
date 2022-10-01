<script>
	import { onMount } from 'svelte';
	import { index, absoluteIndex } from '$lib/store/store.js';

	function turnLeft() {
		console.log('left');
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		console.log('right');
		absoluteIndex.update((val) => val + 1);
	}

	let Geometry;

	onMount(async () => {
		const module = await import('./geometry.svelte');
		Geometry = module.default;
	});
</script>

<main>
	<svelte:component this={Geometry} />
	<div class="arrows">
		<h1 on:click={turnLeft}>←</h1>
		<h2>OBJ_0{$index}</h2>
		<h1 on:click={turnRight}>→</h1>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		max-height: 100vh;
	}

	.arrows {
		position: absolute;
		top: 75%;
		transform: translateY(-30%);
		width: 100%;
		padding: 0 4rem;
		display: flex;
		justify-content: space-between;
		user-select: none;
	}

	.arrows h1 {
		font-family: nb-television-2d, sans-serif;
		font-size: 250px;
		cursor: pointer;
	}

	.arrows h1:hover {
		font-family: nb-television-3d, nb-television-2d, sans-serif;
	}

	.arrows h2 {
		font-size: 150px;
		line-height: 150px;
		height: 200px;
		user-select: none;
		font-family: nb-television-2d, sans-serif;
		padding: 2rem;
	}

	@media only screen and (max-width: 1000px) {
		.arrows h1 {
			font-size: 200px;
		}
		.arrows h2 {
			font-size: 150px;
		}
	}
</style>
