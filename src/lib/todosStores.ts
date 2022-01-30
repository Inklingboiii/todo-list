import { writable } from 'svelte/store';

type Todos = Array<{
	text: string,
	today: boolean,
	deadline: Date,
	id: number
}>

type InactiveTodos = Todos & Array<{
	succeeded: boolean
}>
	

// Using test data for now, will fetch actual data later
const todos: Todos = [
	{text: 'example test', today: true, deadline: new Date(new Date().setSeconds(new Date().getSeconds() + 10)), id: 0},
	{text: 'example test 2', today: true, deadline: new Date(new Date().setSeconds(new Date().getSeconds() + 120)), id: 1}
];
const inactiveTodos: InactiveTodos = [{text: 'missed todo', today: true, deadline: new Date(), succeeded: false, id: 0}];

const todosStore = writable(todos);
todosStore.subscribe((todos) => {
	// Update database everytime store changes
});
const inactiveTodosStore = writable(inactiveTodos);
inactiveTodosStore.subscribe((inactiveTodos) => {
	// Update database everytime store changes
});

export { todosStore, inactiveTodosStore };