<script>
	export let name;
	export let description;
	export let index;
</script>

<section>
	<div class="item flex">
		<h1>{name}</h1>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		padding: 20px 0 0 0;
	}

	h1 {
		font-family: nb-television-2d, sans-serif;
	}

	h1.clickable {
		cursor: pointer;
	}

	h1.clickable:hover {
		font-family: nb-television-3d, sans-serif;
		color: var(--accent);
	}

	.item {
		width: 100%;
	}

	.item.flex {
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
	}
</style>
