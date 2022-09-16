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
