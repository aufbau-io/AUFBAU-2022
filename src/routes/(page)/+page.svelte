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
		<div class="header">
			<Header />
		</div>
		<div class="projects">
			<Silicon />
			<div class="divider" />
			<Replika />
			<div class="divider" />
		</div>
	</body>
</main>

<style>
	main {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		max-height: calc(100vh);
		max-width: calc(100vw);
		background: #121212aa;
	}

	body {
		height: auto;
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

