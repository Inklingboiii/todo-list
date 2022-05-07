import { writable, Writable } from 'svelte/store';
type time = number
const currentTimeStore: Writable<time> = writable(Date.now());

setInterval(() => {
    currentTimeStore.set(Date.now())
}, 1000)

export default currentTimeStore;