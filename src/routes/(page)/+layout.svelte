<script>
	import '../../app.css';
	import { onMount } from 'svelte';
	let Geometry;

	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import Header from '$lib/components/header/header.svelte';

	onMount(async () => {
		const module = await import('$lib/components/geometry/Geometry.svelte');
		Geometry = module.default;
	});
</script>

<!--svelte:component this={Geometry} /-->

<main>
	<div class="sidebar">
		<Sidebar />
	</div>
	<div class="header">
		<Header />
	</div>
	<slot />
</main>

<style>
	main {
		display: flex;
	}

	.header {
		width: 100%;
	}
</style>
