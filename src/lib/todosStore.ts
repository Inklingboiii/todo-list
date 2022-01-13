import { writable } from 'svelte/store';

// Using test data for now, will fetch actual data later
type Todos = Array<{
	text: string,
	today: boolean,
	deadline: DateConstructor
}>
const todosStore = new writable([{text: 'example test', today: true, deadline: new Date()}]);
export default todosStore;