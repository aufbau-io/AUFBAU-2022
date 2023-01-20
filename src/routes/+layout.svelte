<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { screenType, userType } from '$lib/store/store';

	let lorem =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit arcu, molestie non risus eget, consectetur faucibus dui. Aliquam erat volutpat. Duis volutpat posuere libero tincidunt fringilla. Aliquam pretium diam ut elit mattis, a ullamcorper tortor congue. Donec ultrices sapien et ipsum volutpat semper. Praesent sed ipsum vestibulum, mollis turpis sit amet, molestie magna. Suspendisse pharetra nunc eu mauris sollicitudin aliquet. Sed nec lacus nec lacus porta sodales. Fusce fringilla enim vitae urna interdum, a molestie nunc cursus. Aenean pretium orci eget fringilla commodo. Ut malesuada sapien metus, in tincidunt mauris volutpat eget. Aenean at neque et magna ullamcorper viverra at in tellus. Pellentesque mattis magna sit amet dui sodales temp';

	let Geometry;
	onMount(async () => {
		// ---------------------------------------------------------------------------
		// HEIGHT
		// ---------------------------------------------------------------------------

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});

		const module = await import('./geometry.svelte');
		Geometry = module.default;

		// ---------------------------------------------------------------------------
		// SCREEN
		// ---------------------------------------------------------------------------
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// tablet
			screenType.set(2);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			// phone
			screenType.set(1);
		} else {
			//laptop
			screenType.set(3);
		}
	});
</script>

<svelte:head>
	<title>AUFBAU DIGITAL</title>

	<link rel="preload" href="/system_diagram.png" as="image" />

	<link
		rel="preload"
		as="font"
		href="/fonts/dahlia-medium.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>

	<link rel="preload" as="font" href="/fonts/sirap.woff" type="font/woff" crossorigin="anonymous" />

	<link
		rel="preload"
		as="font"
		href="/fonts/test-untitled-sans-light.woff2"
		type="font/woff2"
		crossorigin="anonymous"
	/>
</svelte:head>

{#key userType}
	<svelte:component this={Geometry} />
{/key}
<h1>AUFBAU</h1>
<section>
	{#each Array(100) as _, i}
		{lorem}
	{/each}
</section>
<main />
<slot />

<style>
	main {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		height: calc(var(--vh, 1vh) * 100);

		background: linear-gradient(115deg, #0b0b0bff, #232323aa, #0b0b0bff);
		z-index: -2;
	}
	section {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -3;

		font-family: sirap, sans-serif;
		color: #2b2b2b;
		font-size: 2rem;
		line-height: 2rem;
		line-break: anywhere;
		text-shadow: 2px 2px 0px var(--blue), -2px -2px 0px var(--green);
	}
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -225%);
		font-size: 400px;
		-webkit-text-stroke: 1px var(--primary);
		color: transparent;
		z-index: -1;
	}

	@media (max-width: 760px) {
		h1 {
			font-size: 120px;
		}

		section {
			font-size: 1rem;
			line-height: 1rem;
		}
	}
</style>
