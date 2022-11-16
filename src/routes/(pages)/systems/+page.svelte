<script>
	import { setMouseOnLink, setMouseOffLink } from '$lib/functions/mouse.js';
	import { lazyLoad } from '$lib/functions/lazyLoad.js';
</script>

<main>
	<figure>
		<img use:lazyLoad={'/system_diagram.png'} alt={'modular system diagram'} class="img" />
	</figure>
</main>

<style>
	main {
		position: relative;
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	figure {
		background: var(--background);
	}

	img {
		opacity: 0;
		transition: opacity 1s;
		max-height: 100vh;
		max-width: 100vw;

		border-left: solid 1px var(--primary-50);
		border-right: solid 1px var(--primary-50);
	}

	@media (max-width: 760px) {
		img {
			border-left: none;
			border-right: none;
			border-top: solid 1px var(--primary-50);
			border-bottom: solid 1px var(--primary-50);
		}
	}
</style>
