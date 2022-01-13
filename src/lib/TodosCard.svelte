<script>
	import todos from '$lib/todosStore';
	$: dailyTodos = $todos.filter((todo) => todo.today);
</script>

{#if dailyTodos.length > 0}
	{#each dailyTodos as dailyTodo}
		<p>{dailyTodo.text}</p>
	{/each}
{:else}
	No todos.
{/if}