<script>
	export let text = 'Button';
	export let size = '';
	export let active;
	export let disabled;

	let classString = 'btn';
	if (disabled) {
		classString = size.concat(' ', 'disabled');
	} else {
		if (active) {
			classString = size.concat(' ', 'active');
		} else {
			classString = size;
		}
	}
</script>

<button>
	<p class={classString}>{text}</p>
</button>

<style>
	button {
		text-transform: uppercase;
	}

	button:hover,
	.active {
		color: var(--accent);
	}

	.disabled,
	.disabled:hover {
		opacity: 0.5;
		cursor: default;
		color: var(--white);
	}
</style>
