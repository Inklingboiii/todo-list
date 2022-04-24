<script>
    export let day;
    export let todos;
    import DailyTodosIcon from '$lib/icons/DailyTodosIcon.svelte';
    import GoalIcon from '$lib/icons/GoalIcon.svelte';

    // Check for succeeded, so it only checks for active todos
    $: hasDailyTodos = todos.some((todo) => todo.today && todo.succeeded === undefined);
    $: hasGoals = todos.some((todo) => !todo.today);
</script>

    <h2>{day}</h2>
    {#each todos as todo}
        {#if !todo.today}
            <p>{todo.text}</p>
        {/if}
    {/each}
    {#if hasDailyTodos}
        <DailyTodosIcon />
    {/if}
    {#if hasGoals}
        <GoalIcon />
    {/if}

