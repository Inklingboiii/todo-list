<script>
	import { fly } from 'svelte/transition';
	import { todosStore } from '$lib/todosStores';
	import DailyTodo from '$lib/DailyTodosCard/DailyTodo.svelte';
	import CallToAction from '$lib/utilities/CallToAction.svelte';
	$: dailyTodos = $todosStore.filter((todo) => todo.today);
</script>
<section aria-labelledby="todo-heading">
	<h2 id="todo-heading">Daily to-dos</h2>
	{#if dailyTodos.length}
		<ul>
			{#each dailyTodos as dailyTodo (dailyTodo.id)}
				<DailyTodo todo={dailyTodo} />
			{/each}
		</ul>
	{:else}
		<p transition:fly|local={{x: 100}}>No to-dos added</p>
	{/if}
	<CallToAction href="/add-todos">Add {dailyTodos.length ? 'more' : ''} to-dos</CallToAction>
</section>

<style>
	section {
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

	@media (min-width: 50em) {
		section {
			margin: 0;
		}
	}

	ul {
		align-self: stretch;
	}
</style>