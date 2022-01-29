import { todosStore } from '$lib/todosStores';

export function expireTodo(expiredTodo, successfull) {
	todosStore.filter((todo) => {
		if(todo.id === expiredTodo.id) true
	})
}