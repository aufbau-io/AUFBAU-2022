<script>
	import Ticker from './ticker.svelte';
</script>

<header>
	<Ticker />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		height: 50px;
		border-bottom: solid 1px var(--white-50);
		user-select: none;

		width: calc(100vw - 490px);
		overflow: hidden;
	}
</style>
