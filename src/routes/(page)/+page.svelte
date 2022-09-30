<script>
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Header from '$lib/components/header/header.svelte';

	import Silicon from '$lib/components/projects/silicon/silicon.svelte';
	import Replika from '$lib/components/projects/replika/replika.svelte';
	import Siiignal from '$lib/components/projects/siiignal/siiignal.svelte';
	import Iota from '$lib/components/projects/iota/iota.svelte';

	import Contact from '$lib/components/contact/contact.svelte';

	let loading = true;
	const start = async () => {
		loading = false;
	};
</script>

<div>
	<button on:click={start}> NO MORE DEAD WEB</button>
</div>

<div class="divider" />
<svelte:head>
	<title>AUFBAU WEB STUDIO</title>
</svelte:head>

<main>
	<body>
		<!--div class="info">
			<p class="lrg">
				<a href="https://silicon.fm">(visit) SILICON</a> ---------------- svelte.js ◯ supabase ◯ python
				◯ gcp
			</p>
			<p class="xs">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nisi bibendum,
				scelerisque orci quis, tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus
				consequat massa lorem, eu ultrices turpis venenatis eget. Phasellus Dip. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Mauris at nisi bibendum, scelerisque orci quis,
				tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus consequat massa lorem, eu
				ultrices turpis venenatis eget. Phasellus Dip.
			</p>
		</div-->
		<div class="header">
			<Header />
		</div>
		<div class="projects">
			<Iota />
			<div class="divider" />
			<Silicon />
			<div class="divider" />
			<Replika />
			<div class="divider" />
			<Siiignal />
			<div class="divider" />
			<Contact />
		</div>
	</body>
</main>

<style>
	button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	button h1 {
		font-family: nb-television-2d, sans-serif;
	}

	main {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		background: #121212aa;
		overflow: hidden;
	}

	body {
		height: auto;
	}

	.info {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100px;
		background: var(--black);
		border-top: solid 1px var(--white-50);
		padding: 8px 16px;
		z-index: 10;
		letter-spacing: 0.6px;
	}

	.info h6 {
		padding-bottom: 8px;
	}

	a {
		color: var(--error);
	}

	.sidebar {
		height: 100vh;
		overflow: hidden;
	}

	.header {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 20;
	}

	.projects {
		position: fixed;
		right: 0;

		height: 100vh;
		top: 0;

		/*
		top: 0;
		height: calc(100vh);
		*/
		width: calc(100vw px);
		overflow-x: hidden;
		overflow-y: auto;
	}

	.divider {
		height: 1px;
		width: 100%;
		background: var(--white-50);
	}
</style>
