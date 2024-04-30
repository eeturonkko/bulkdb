import { writable } from 'svelte/store';
import type { Week } from '$lib/db/schema';

export const weeks = writable<Week[]>([]);
