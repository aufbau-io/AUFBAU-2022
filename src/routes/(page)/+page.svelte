<script>
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Header from '$lib/components/header/header.svelte';

	import Silicon from '$lib/components/projects/silicon/silicon.svelte';
	import Replika from '$lib/components/projects/replika/replika.svelte';
	import Siiignal from '$lib/components/projects/siiignal/siiignal.svelte';
	import Iota from '$lib/components/projects/iota/iota.svelte';

	import Contact from '$lib/components/pages/contact.svelte';
	import About from '$lib/components/pages/about.svelte';

	let loading = false;
	let project = 'IOTA';

	let start = async () => {
		loading = false;
	};
	let setProject = async (item) => {
		project = item;
		console.log(project);
	};
</script>

<svelte:head>
	<title>AUFBAU WEB STUDIO</title>
</svelte:head>

<main>
	<div class="sidebar">
		AUFBAU<br />
		.//<br /><br />
		<button class:active={project === 'IOTA'} on:click={() => setProject('IOTA')}>IOTA</button>
		<button class:active={project === 'SILICON'} on:click={() => setProject('SILICON')}
			>SILICON</button
		>
		<!--button class:active={project === 'SIIIGNAL'} on:click={() => setProject('SIIIGNAL')}
			>SIIIGNAL</button
		-->
		<button class:active={project === 'REPLIKA'} on:click={() => setProject('REPLIKA')}
			>REPLIKA</button
		>
		<br /><br />
		<button class:active={project === 'ABOUT'} on:click={() => setProject('ABOUT')}>ABOUT</button>
		<button class:active={project === 'CONTACT'} on:click={() => setProject('CONTACT')}
			>CONTACT</button
		>
	</div>
	<body>
		<div class="projects">
			{#key project}
				{#if project == 'IOTA'}
					<Iota />
				{:else if project == 'SILICON'}
					<Silicon />
				{:else if project == 'REPLIKA'}
					<Replika />
				{:else if project == 'SIIIGNAL'}
					<Siiignal />
				{:else if project == 'CONTACT'}
					<Contact />
				{:else if project == 'ABOUT'}
					<About />
				{/if}
			{/key}
		</div>
	</body>
</main>

<style>
	button.start {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	button h1 {
		font-family: nb-television-2d, sans-serif;
	}

	button {
		opacity: 0.3;
	}

	button:hover {
		opacity: 0.6;
	}

	button.active,
	button.active:hover {
		opacity: 1;
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

	.sidebar {
		user-select: none;
		position: absolute;
		height: 100vh;
		width: 100px;
		border-right: solid 1px var(--white-50);
		padding: 10px;
		overflow: hidden;
		z-index: 20;
	}

	.header {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
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
