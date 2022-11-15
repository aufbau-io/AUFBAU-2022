<script>
	import { screenType, mouseOnLink } from '$lib/store/store';
	import { setMouseOnLink, setMouseOffLink } from '$lib/functions/mouse.js';
</script>

<slot />

<a
	on:mouseenter={() => setMouseOnLink()}
	on:mouseleave={() => setMouseOffLink()}
	href="/"
	class="centreButton">return</a
>
