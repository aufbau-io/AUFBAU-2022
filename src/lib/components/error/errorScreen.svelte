<script>
	export let error = {};
	export let status;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="center">
	<h2>Error {status}</h2>
	<h6>{error.message}</h6>
</div>

<style>
	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	h2,
	h6 {
		color: var(--black);
	}
</style>
