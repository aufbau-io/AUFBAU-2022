<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { screenType, userType } from '$lib/store/store';

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
<slot />

<style>
	h1 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -225%);
		font-size: 400px;
		-webkit-text-stroke: 1px var(--primary);
		color: transparent;
		z-index: -10;
	}

	@media (max-width: 760px) {
		h1 {
			font-size: 120px;
		}
	}
</style>
