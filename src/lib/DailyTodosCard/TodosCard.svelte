<script>
	import { todosStore } from '$lib/todosStores';
	$: dailyTodos = $todosStore.filter((todo) => todo.today);
	import DailyTodo from '$lib/DailyTodosCard/DailyTodo.svelte';
	import CallToAction from '$lib/utilities/CallToAction.svelte';
</script>
<article>
	<h2>Daily todos</h2>
	{#if dailyTodos.length}
		<ul>
			{#each dailyTodos as dailyTodo (dailyTodo.id)}
				<DailyTodo todo={dailyTodo} />
			{/each}
		</ul>
	{:else}
		<p>No todos added</p>
	{/if}
	<CallToAction href="/add-todos">Add {dailyTodos.length ? 'more' : ''} todos</CallToAction>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 1em;
		align-items: center;
		width: fit-content;
		max-width: 100%;
		margin: auto;
		padding:  1em;
		background-color: black;
		color: white;
	}

	ul {
		align-self: stretch;
	}
</style>