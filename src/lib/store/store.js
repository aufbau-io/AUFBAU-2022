import { writable } from 'svelte/store';

export const active = writable(true);
export const screenType = writable(null);
export const userType = writable(null);
export const mouseOnLink = writable(false);
