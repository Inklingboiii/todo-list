import { writable, get } from 'svelte/store';

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

function expireTodo(todo: Todos[0], succeeded: boolean) {
	console.log('B')
	 // Move todo to inactivetodo store
	 todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
	 // Reselect the ids
	 console.log('unided', [...get(todosStore)])
	 todosStore.update((storeTodos) => storeTodos.map((todo, index) => ({...todo, id: index})));
	 console.log('ided', [...get(todosStore)])
	 todo.id = get(inactiveTodosStore).length;
	 inactiveTodosStore.update((storeTodos) => [...storeTodos, {...todo, succeeded: succeeded}]);
}

export { todosStore, inactiveTodosStore, expireTodo };