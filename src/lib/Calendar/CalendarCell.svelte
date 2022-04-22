<script>
    export let day;
    export let inMonth;
    export let isCurrentDay;
    export let todos;
    import DailyTodosIcon from '$lib/icons/DailyTodosIcon.svelte';
    import GoalIcon from '$lib/icons/GoalIcon.svelte';

    const focus = el => el.focus();
</script>
{#if isCurrentDay}
<td tabindex="0"  class="current-day" role="gridcell" aria-selected={true} use:focus>
    <h2>{day}</h2>
    {#each todos as todo}
    <p>{todo.text}</p>
    {/each}
    <DailyTodosIcon />
    <GoalIcon />
</td>
{:else}
<td tabindex="-1" class:not-in-month={!inMonth}>
    <h2>{day}</h2>
    {#each todos as todo}
    <p>{todo.text}</p>
    {/each}
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