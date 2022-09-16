<script>
	export let direction = 'right';
</script>

<svg
	class={direction}
	width="84"
	height="71"
	viewBox="0 0 84 71"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M77.6141 35.5L0 35.5" />
	<path d="M45.4873 3.36389L77.6234 35.5L45.4873 67.6361" />
</svg>

<style>
	svg {
		transform-box: fill-box;
		transform-origin: center;
		stroke: inherit;
		stroke-width: 8;
	}
	.up {
		transform: rotate(-90deg);
	}
	.down {
		transform: rotate(90deg);
	}
	.left {
		transform: rotate(-180deg);
	}

	@media only screen and (max-width: 976px) {
		svg {
			max-height: 50px;
			max-width: 50px;
		}
	}

	@media only screen and (max-width: 768px) {
		svg {
			max-height: 31px;
			max-width: 31px;
		}
	}
</style>
