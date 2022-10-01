<script>
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Header from '$lib/components/header/header.svelte';

	import Silicon from '$lib/components/projects/silicon/silicon.svelte';
	import Replika from '$lib/components/projects/replika/replika.svelte';
	import Siiignal from '$lib/components/projects/siiignal/siiignal.svelte';
	import Iota from '$lib/components/projects/iota/iota.svelte';

	import Home from '$lib/components/projects/blocks/blocks.svelte';
	import About from '$lib/components/pages/about.svelte';

	let loading = false;
	let project = 'HOME';

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

{#if project == 'HOME'}
	<button class="start black">MAKE WEB FUN AGAIN</button>
{:else if project == 'IOTA'}
	<button class="start"><a href="https://iota.health">visit IOTA</a></button>
{:else if project == 'HEDRON'}
	<button class="start"><a href="https://silicon.fm">visit HEDRON</a></button>
{:else if project == 'SILICON'}
	<button class="start">WIP</button>
{:else if project == 'REPLIKA'}
	<button class="start"><a href="https://replika.netlify.app">visit REPLIKA</a></button>
{/if}

<main>
	<div class="sidebar">
		AUFBAU<br />
		<button class:active={project === 'HOME'} on:click={() => setProject('HOME')}>.//</button>
		<br /><br />
		<button class:active={project === 'IOTA'} on:click={() => setProject('IOTA')}>IOTA</button>
		<button class:active={project === 'HEDRON'} on:click={() => setProject('HEDRON')}>HEDRON</button
		>
		<!--button class:active={project === 'SILICON'} on:click={() => setProject('SILICON')}
			>SILICON</button
		-->
		<!--button class:active={project === 'SIIIGNAL'} on:click={() => setProject('SIIIGNAL')}
			>SIIIGNAL</button
		-->
		<button class:active={project === 'REPLIKA'} on:click={() => setProject('REPLIKA')}
			>REPLIKA</button
		>
		<br /><br />
		<button class:active={project === 'ABOUT'} on:click={() => setProject('ABOUT')}>SAY HI</button>
		<!--button class:active={project === 'CONTACT'} on:click={() => setProject('CONTACT')}
			>CONTACT</button
		-->
	</div>
	<body>
		<div class="projects">
			{#key project}
				{#if project == 'HOME'}
					<Home />
				{:else if project == 'IOTA'}
					<Iota />
				{:else if project == 'SILICON'}
					<Silicon />
				{:else if project == 'REPLIKA'}
					<Replika />
				{:else if project == 'SIIIGNAL'}
					<Siiignal />
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
		z-index: 20;
		opacity: 1;
		background: var(--black);
		color: var(--accent);
		max-width: 40vw;
	}

	button.start:hover {
		background: var(--accent);
		color: var(--black);
		opacity: 1;
	}

	button.start.black,
	button.start.black:hover {
		color: var(--accent);
		user-select: none;
		opacity: 1;
		cursor: default;
		background: #171717;
	}

	button h1 {
		font-family: nb-television-2d, sans-serif;
	}

	button {
		opacity: 0.3;
		padding: 0 6px;
		border-radius: 4px;
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
		border-right: solid 1px var(--accent);
		padding: 10px;
		overflow: hidden;
		z-index: 100;
		color: var(--accent);
		background: none;
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

	.projects {
		overflow: hidden;
	}

	.divider {
		height: 1px;
		width: 100%;
		background: var(--white-50);
	}

	@media only screen and (max-width: 768px) {
		.sidebar {
			border-color: var(--accent-30);
		}
	}
</style>
