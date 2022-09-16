<script>
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Header from '$lib/components/header/header.svelte';

	import Silicon from '$lib/components/projects/silicon/silicon.svelte';
	import Replika from '$lib/components/projects/replika/replika.svelte';
</script>

<svelte:head>
	<title>AUFBAU WEB STUDIO</title>
</svelte:head>

<main>
	<div class="sidebar">
		<Sidebar />
	</div>
	<body>
		<div class="info">
			<p class="lrg">SILICON --------------- svelte.js ◯ supabase ◯ python ◯ gcp</p>
			<p class="xs">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nisi bibendum,
				scelerisque orci quis, tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus
				consequat massa lorem, eu ultrices turpis venenatis eget. Phasellus Dip. Lorem ipsum dolor
				sit amet, consectetur adipiscing elit. Mauris at nisi bibendum, scelerisque orci quis,
				tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus consequat massa lorem, eu
				ultrices turpis venenatis eget. Phasellus Dip.
			</p>
		</div>
		<div class="header">
			<Header />
		</div>
		<div class="projects">
			<Silicon />
			<div class="divider" />
			<Replika />
		</div>
	</body>
</main>

<style>
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
		width: calc(100vw - 490px);
		height: 100px;
		background: var(--black);
		border-top: solid 1px var(--white-50);
		padding: 8px 16px;
		z-index: 10;
	}

	.info h6 {
		padding-bottom: 8px;
	}

	.header {
		position: fixed;
		top: 0;
		right: 0;
	}

	.projects {
		position: fixed;
		top: 50px;
		right: 0;
		height: calc(100vh - 50px);
		width: calc(100vw - 490px);
		overflow-x: hidden;
		overflow-y: auto;
	}

	.divider {
		height: 1px;
		width: 100%;
		background: var(--white-50);
	}
</style>
