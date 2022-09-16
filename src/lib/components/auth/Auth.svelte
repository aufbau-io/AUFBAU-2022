<script>
	import { supabase } from '$lib/clients/supabaseClient';
	import Bouncer from '../ascii/bouncer.svelte';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={handleLogin}>
	<div>
		<p class="description">Sign in via magic link with your email below</p>
		<div>
			<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
		</div>
		<input
			type="submit"
			class="button block"
			value={loading ? 'Loading' : 'Send magic link'}
			disabled={loading}
		/>
	</div>
</form>
<Bouncer />

<div class="container">
	<div class="item flex">
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
		<h1>SECURITY</h1>
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 55px;
		left: 0px;
		width: calc(100vw - 40px);
		overflow: hidden;
		z-index: -10;
	}
	.item.flex {
		color: var(--white-10);
		display: flex;
		width: 140vw;
		gap: 0 20px;
		flex-flow: row wrap;
		padding: 0 40px;
		user-select: none;

		height: calc(100vh - 120px);
		overflow: hidden;
	}

	form {
		background: #121212bb;
		padding: 40px 0;
	}

	div {
		padding: 16px 0;
	}

	input {
		color: var(--accent);
	}

	input[type='email'] {
		font-family: nb-architekt, sans-serif;
		font-size: 40px;
		line-height: 0px;
		background: var(--black);
		border-bottom: solid 1px var(--white);
	}

	input:focus {
		outline: none;
	}

	input::placeholder {
		font-family: nb-architekt, sans-serif;
		color: var(--white);
	}
</style>
