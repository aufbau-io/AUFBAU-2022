<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { screenType, demoSrc } from '$lib/store/store';

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
			screenType.set(1);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			// phone
			screenType.set(2);
		} else {
			//laptop
			screenType.set(3);
		}
	});
</script>

<svelte:head>
	<title>AUFBAU DIGITAL</title>
	<meta name="description" content="Dan Humphries. Creaitve Web Engineer based in London." />

	<link rel="prefetch" href="/system_diagram.png" />

	<link
		rel="preload"
		as="font"
		href="/fonts/dahlia-bold.woff"
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

<svelte:component this={Geometry} />
{#key $screenType}
	{#if $screenType}
		<main>
			<slot />
		</main>
	{/if}
{/key}

<!-- {#key $demoSrc}
	{#if $demoSrc}
		<iframe src={$demoSrc} title="demo" width="100%" height="100%" class="iframe" />
	{/if}
{/key} -->
<style>
	main {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
	}

	.iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
