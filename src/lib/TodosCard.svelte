<script>
	import {todosStore} from '$lib/todosStores';
	$: dailyTodos = $todosStore.filter((todo) => todo.today);
</script>
<article>
	{#if dailyTodos.length}
		<ul>
		{#each dailyTodos as dailyTodo}
			<li>{dailyTodo.text}</li>
		{/each}
		</ul>
	{:else}
		<p>No todos added</p>
	{/if}
	<a href="#">Add {dailyTodos.length ? 'more' : ''} todos</a>
</article>