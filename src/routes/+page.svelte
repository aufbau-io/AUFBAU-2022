<script>
	import { onMount } from 'svelte';
	import { active, screenType, demoSrc } from '$lib/store/store';
	let Geometry, CC2000, Playground;

	onMount(async () => {
		const module1 = await import('./geometry.svelte');
		Geometry = module1.default;

		const module2 = await import('./CC2000.svelte');
		CC2000 = module2.default;

		const module3 = await import('./playground.svelte');
		Playground = module3.default;
	});

	let toggle = () => {
		active.update((val) => !val);
	};

	let setSrc = (val) => {
		demoSrc.set(val);
	};
</script>

<svelte:component this={Playground} />

<section>
	<header>
		<!-- <img src="header.png" alt="header img" /> -->

		<h1>aufbau // Dan H.</h1>
		<p>freerange + technical web things.</p>
		<p>grassfed in east london.</p>
		<p>-</p>
		<div>
			<a target="_blank" href="https://www.instagram.com/dn.niels/">insta</a>
			<a target="_blank" href="https://www.linkedin.com/in/dan-humphries">linkedin</a>
			<a href="mailto: dan@aufbau.io">email</a>
			<a target="_blank" href="/dan_humphries_cv.pdf">cv</a>
		</div>
	</header>
	<main>
		<div><svelte:component this={CC2000} /></div>
		<div><img src="tee.jpg" alt="header img" /></div>
		<div><img src="garrett.png" alt="header img" /></div>
		<div><img src="sicovecas.png" alt="header img" /></div>
		<div><img src="system_diagram.png" alt="header img" /></div>
		<div><svelte:component this={Geometry} /></div>
	</main>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		margin: auto;
		display: flex;
		overflow: auto;
	}

	header {
		margin: 20px;
		width: 25%;

		display: flex;
		flex-flow: column nowrap;
		text-align: center;
		user-select: none;
	}

	header h1 {
		font-family: untitled-serif;
		font-weight: 400;
		font-size: 24px;
	}

	header p,
	header a {
		font-size: 12px;
	}

	main {
		width: 100%;
		padding: 20px;

		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		gap: 20px;
	}

	main div {
		border: solid 1px var(--white);

		width: calc(50% - 10px);
		max-width: 400px;
		height: calc(50% - 10px);
	}

	main div img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	main div:hover {
		border: var(--accent) solid 1px;
	}
</style>
