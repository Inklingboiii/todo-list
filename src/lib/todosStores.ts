import { writable } from 'svelte/store';
import { nanoid as uuid } from 'nanoid'

type Todos = Array<{
	text: string,
	today: boolean,
	deadline: Date,
	id: string
}>

type InactiveTodos = Todos & Array<{
	succeeded: boolean
}>
	

// Using test data for now, will fetch actual data later
const todos: Todos = [
	{text: 'example test', today: true, deadline: new Date(new Date().setHours(new Date().getHours() + 2)), id: uuid()},
	{text: 'example test 2', today: true, deadline: new Date(new Date().setSeconds(new Date().getSeconds() + 120)), id: uuid()},
	{text: 'example test 3', today: true, deadline: new Date(new Date().setHours(new Date().getHours() + 10)), id: uuid()},

];
const inactiveTodos: InactiveTodos = [{text: 'missed todo', today: true, deadline: new Date(), succeeded: false, id: uuid()}];

const todosStore = writable(todos);
todosStore.subscribe((todos) => {
	// Update database everytime store changes
});
const inactiveTodosStore = writable(inactiveTodos);
inactiveTodosStore.subscribe((inactiveTodos) => {
	// Update database everytime store changes
});

function expireTodo(todo: Todos[0], succeeded: boolean) {
	console.log('B', todo.text)
	 // Move todo to inactivetodo store
	 todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
	 inactiveTodosStore.update((storeTodos) => [...storeTodos, {...todo, succeeded: succeeded}]);
}

function deleteTodo(todo: Todos[0]) {
	todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
}

export { todosStore, inactiveTodosStore, expireTodo, deleteTodo };