import { writable } from 'svelte/store';

type Todos = Array<{
	text: string,
	today: boolean,
	deadline: Date
}>

type InactiveTodos = Todos & Array<{
	succeeded: boolean
}>
	

// Using test data for now, will fetch actual data later
const todos: Todos = [{text: 'example test', today: true, deadline: new Date(new Date().setHours(new Date().getHours() + 2))}];
const inactiveTodos: InactiveTodos = [{text: 'missed todo', today: true, deadline: new Date(), succeeded: false}];

const todosStore = new writable(todos);
todosStore.subscribe((todos) => {
	// Update database everytime store changes
});
const inactiveTodosStore = new writable(inactiveTodos);
inactiveTodosStore.subscribe((inactiveTodos) => {
	// Update database everytime store changes
});
export { todosStore, inactiveTodosStore };