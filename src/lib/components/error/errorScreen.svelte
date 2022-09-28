<script>
	export let error = {};
	export let status;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="content-center my-24">
	<h2>Error {status}</h2>
	<h6>{error.message}</h6>
</div>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: nb-television-2d, sans-serif;
	}
</style>
