import { writable, get } from 'svelte/store';
import todoAlertStore from '$lib/todoAlertStore.ts';

type Todo = {
	text: string,
	today: boolean,
	deadline: number,
	id: string
}

type InactiveTodo = Todo & {
	succeeded: boolean
}

type Todos = Array<Todo>;
type InactiveTodos = Array<InactiveTodo>;
	

// Using test data for now, will fetch actual data later
const todos: Todos = [
	{text: 'example test', today: true, deadline: new Date(new Date(new Date().setHours(new Date().getHours() + 1)).setSeconds(new Date().getSeconds() + 10)).getTime(), id: crypto.randomUUID()},
	{text: 'example test 2', today: true, deadline: new Date(new Date().setSeconds(new Date().getSeconds() + 120)).getTime(), id: crypto.randomUUID()},
	{text: 'example goal 1', today: false, deadline: new Date(new Date(new Date().setHours(new Date().getHours() + 1)).setSeconds(new Date().getSeconds() + 5)).getTime(), id: crypto.randomUUID()},
	{text: 'example goal 2', today: false, deadline: new Date(new Date().setMonth(new Date().getMonth() + 1)).getTime(), id: crypto.randomUUID()},
];
const inactiveTodos: InactiveTodos = [{text: 'missed todo', today: true, deadline: new Date().getTime(), succeeded: false, id: crypto.randomUUID()}];

const todosStore = writable(todos);
todosStore.subscribe((todos) => {
	// Update database everytime store changes
});
const inactiveTodosStore = writable(inactiveTodos);
inactiveTodosStore.subscribe((inactiveTodos) => {
	// Update database everytime store changes
});

function addTodo(todo: Todo) {
	todosStore.update((todos) => [...todos, todo]);
	// Add alert
	const alert = `Todo: "${todo.text}" added`;
	todoAlertStore.update((alerts) => [...alerts, alert]);
	// Remove alert after some time
	setTimeout(() => todoAlertStore.update((alerts) => alerts.filter((alertInstance) => alertInstance !== alert)), 10000);
}

function expireTodo(todo: Todo, succeeded: boolean) {
	// Move todo to inactivetodo store
	todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
	inactiveTodosStore.update((storeTodos) => [...storeTodos, {...todo, succeeded: succeeded}]);
}

function deleteTodo(todo: Todo) {
	todosStore.update((todos) => todos.filter((storeTodo) => storeTodo.id !== todo.id));
}

function editTodo(todo: Todo) {
	todosStore.update((todos) => {
		todos.find((storeTodo) => 
		storeTodo.id === todo.id).text = todo.text;
		return todos;
	});
}

function sortTodosByDeadline(todosStore: Todos) {
	// Make a copy of it, since sort() doesn't return a new array
	return todosStore.slice().sort((todoOne: Todo, todoTwo: Todo) => todoOne.deadline - todoTwo.deadline);
}

export { todosStore, inactiveTodosStore, addTodo, expireTodo, deleteTodo, editTodo, sortTodosByDeadline };