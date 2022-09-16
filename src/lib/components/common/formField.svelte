<script>
	import Button from './button.svelte';

	export let text = 'Button';
	export let error;

	let isFocused = false;
	const onFocus = () => (isFocused = true);
	const onBlur = () => (isFocused = false);
</script>

<form>
	<input type="text" on:focus={onFocus} on:blur={onBlur} class={error ? 'error' : ''} />
	{#key isFocused}
		<div class="button">
			<Button {text} size="sml" active={isFocused ? true : false} disabled={error ? 'error' : ''} />
		</div>
	{/key}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		min-width: 388px;
		wid: 100%;
	}

	input {
		background: none;
		border-bottom: solid 1px var(--white);
		margin: 6px 0;
		padding: 6px 0;
		display: block;
	}

	.error {
		border-bottom: solid 1px var(--error);
		color: var(--error);
	}

	input[type='text'] {
		font-style: normal;
		font-weight: 300;
		font-size: 18px;
		line-height: 150%;
	}

	input:focus {
		outline: none;
	}

	.button {
		align-self: flex-end;
	}
</style>
