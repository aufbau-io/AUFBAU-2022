import { writable } from 'svelte/store';

export const active = writable(true);
export const screenType = writable(1);
export const demoSrc = writable(null);
