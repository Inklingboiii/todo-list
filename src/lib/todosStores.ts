import { writable, get } from 'svelte/store';
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
	{text: 'example test', today: true, deadline: new Date(new Date(new Date().setHours(new Date().getHours() + 1)).setSeconds(new Date().getSeconds() + 10)), id: uuid()},
	{text: 'example test 2', today: true, deadline: new Date(new Date().setSeconds(new Date().getSeconds() + 120)), id: uuid()},
	{text: 'example goal 1', today: false, deadline: new Date(new Date(new Date().setHours(new Date().getHours() + 24)).setSeconds(new Date().getSeconds() + 10)), id: uuid()},
	{text: 'example goal 2', today: false, deadline: new Date(new Date().setMonth(new Date().getMonth() + 1)), id: uuid()},

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

function addTodo(todo: Todos[0]) {
console.log(JSON.parse(JSON.stringify(get(todosStore))));
todosStore.update((todos) => [...todos, todo])
console.log(JSON.parse(JSON.stringify(get(todosStore))));
}

function expireTodo(todo: Todos[0], succeeded: boolean) {
	// Move todo to inactivetodo store
	todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
	inactiveTodosStore.update((storeTodos) => [...storeTodos, {...todo, succeeded: succeeded}]);
}

function deleteTodo(todo: Todos[0]) {
	todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
}

function editTodo(todo: Todos[0]) {
	todosStore.update((todos) => {
		todos.find((storeTodo) => 
		storeTodo.id === todo.id).text = todo.text;
		return todos;
	});
}

function sortTodosByDeadline(todosStore: Todos) {
	// Make a copy of it, since sort() doesn't return a new array
	return todosStore.slice().sort((todoOne: Todos[0], todoTwo: Todos[0]) => {
		return todoOne.deadline.getTime() - todoTwo.deadline.getTime()
	});
}

export { todosStore, inactiveTodosStore, addTodo, expireTodo, deleteTodo, editTodo, sortTodosByDeadline };