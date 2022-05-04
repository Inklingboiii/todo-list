<script>
    export let day;
    export let todos;
    import DailyTodosIcon from '$lib/icons/DailyTodosIcon.svelte';
    import GoalIcon from '$lib/icons/GoalIcon.svelte';

    // Check for succeeded, so it only checks for active todos
    $: hasDailyTodos = todos.some((todo) => todo.today && todo.succeeded === undefined);
    $: hasGoals = todos.some((todo) => !todo.today);
</script>
    <article>
        <h2 class:active-heading={isCurrentDay}>{day}</h2>
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
    </article>

    <style>
        h2 {
            padding: 0.5em;
            width: min-content;
            margin-inline: auto;
        }
        .active-heading {
            background: white;
            border-radius: 100%;
            padding: 0.5em;
        }
    </style>

