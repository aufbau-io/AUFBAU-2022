<slot />

<a href="/" class="start">return</a>

<style>
	a.start,
	a.start.prevent:hover {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 20;
		opacity: 1;
		background: var(--black);
		border: solid 1px var(--white);
		color: var(--white);
		max-width: 40vw;
		cursor: pointer;
		user-select: none;
	}

	a.start:hover {
		background: var(--white);
		color: var(--black);
		border-color: var(--black);
		opacity: 1;
	}
</style>
