<script>
	import { onMount } from 'svelte';
	import Diagram from './diagram.svg';

	// let Geometry;

	// onMount(async () => {
	// 	const module = await import('./geometry.svelte');
	// 	Geometry = module.default;
	// });
</script>

<main>
	<img src={Diagram} class="img" alt="text" />
	<div class="text">
		<div class="block">
			<h2>WEB</h2>
			<p class="lrg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus leo. Nam eu ipsum
				neque. Vivamus bibendum condimentum metus, dapibus venenatis libero varius sed. Suspendisse
				potenti. Integer interdum libero in sem bibendum, vel dignissim felis porttitor. Morbi
				fringilla tempor velit ut tincidunt. Etiam id massa velit. Phasellus quis nulla eu nisl
				accumsan vestibulum in ut lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nunc at sollicitudin risus. Nulla dignissim libero et pharetra efficitur. Vestibulum at
				dictum est.
			</p>
		</div>
		<div class="block">
			<h2>SYSTEMS</h2>
			<p class="lrg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus leo. Nam eu ipsum
				neque. Vivamus bibendum condimentum metus, dapibus venenatis libero varius sed. Suspendisse
				potenti. Integer interdum libero in sem bibendum, vel dignissim felis porttitor. Morbi
				fringilla tempor velit ut tincidunt. Etiam id massa velit. Phasellus quis nulla eu nisl
				accumsan vestibulum in ut lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nunc at sollicitudin risus. Nulla dignissim libero et pharetra efficitur. Vestibulum at
				dictum est.
			</p>
		</div>

		<div class="block">
			<h2>APPS</h2>
			<p class="lrg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tempus leo. Nam eu ipsum
				neque. Vivamus bibendum condimentum metus, dapibus venenatis libero varius sed. Suspendisse
				potenti. Integer interdum libero in sem bibendum, vel dignissim felis porttitor. Morbi
				fringilla tempor velit ut tincidunt. Etiam id massa velit. Phasellus quis nulla eu nisl
				accumsan vestibulum in ut lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nunc at sollicitudin risus. Nulla dignissim libero et pharetra efficitur. Vestibulum at
				dictum est.
			</p>
		</div>
	</div>
</main>

<style>
	main {
		position: relative;
		display: flex;
		width: calc(100vw - 100px);
		height: 100vh;
		margin-left: 100px;
		background: var(--accent);
	}

	img {
		max-width: 100%;
		max-height: 100vh;
	}

	.text {
		border-left: solid 1px var(--black);
		margin: 20px 40px 20px 20px;
		padding-left: 40px;
		color: var(--black);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: untitled-sans;
		overflow-y: auto;
	}

	.blocks {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.block {
		padding: 20px 0;

		border-bottom: solid 1px var(--black);
	}

	h2 {
		width: 100%;
	}

	h2.right {
		text-align: right;
	}
</style>
