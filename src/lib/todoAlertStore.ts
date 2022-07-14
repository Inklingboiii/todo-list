import { writable, Writable } from 'svelte/store';
type Alert = string

const todoAlertStore: Writable<Array<Alert>> = writable([]);

export default todoAlertStore;