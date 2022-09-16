<script>
	import Nav from './nav.svelte';
	import Ticker from './ticker.svelte';
	// stub data out
	const navItems = [
		{
			name: 'MAIN ROOM',
			href: '/'
		},
		{
			name: 'SMOKING AREA',
			href: '/SMOKINGAREA'
		},
		{
			name: 'BACKSTAGE',
			href: '/BACKSTAGE'
		}
	];
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
	}
</style>
