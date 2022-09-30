import { writable, derived } from 'svelte/store';

export const animations = writable(true);
export const absoluteIndex = writable(0);

// javascript modulo doesn't work on negative numbers
function mod(n, m) {
	return ((n % m) + m) % m;
}

export const index = derived(absoluteIndex, ($absoluteIndex) => mod($absoluteIndex, 3) + 1);
