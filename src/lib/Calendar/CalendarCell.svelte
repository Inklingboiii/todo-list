<script>
    export let day;
    export let inMonth;
    export let isCurrentDay;
    export let todos;
    import DailyTodosIcon from '$lib/icons/DailyTodosIcon.svelte';
    import GoalIcon from '$lib/icons/GoalIcon.svelte';

    const focus = el => el.focus();
    // Check for succeeded, so it only checks for active todos
    $: hasDailyTodos = todos.some((todo) => todo.today && todo.succeeded === undefined);
    $: hasGoals = todos.some((todo) => !todo.today);
</script>
{#if isCurrentDay}
<td tabindex="0"  class="current-day" role="gridcell" aria-selected={true} use:focus>
    <h2>{day}</h2>
    {#each todos as todo}
    <p>{todo.text}</p>
    {/each}
    {#if hasDailyTodos}
        <DailyTodosIcon />
    {/if}
    {#if hasGoals}
        <GoalIcon />
    {/if}
</td>
{:else}
<td tabindex="-1" class:not-in-month={!inMonth}>
    <h2>{day}</h2>
    {#each todos as todo}
    <p>{todo.text}</p>
    {/each}
    {#if hasDailyTodos}
        <DailyTodosIcon />
    {/if}
    {#if hasGoals}
        <GoalIcon />    
    {/if}
</td>
{/if}


<style>
    td {
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
    }

    td:focus-within {
        outline: 3px solid black;
    }

    .not-in-month {
        background: gray
    }

    .current-day {
        background: var(--color-primary);
    }
</style>