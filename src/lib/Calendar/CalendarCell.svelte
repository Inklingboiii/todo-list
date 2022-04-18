<script>
    export let day;
    export let inMonth;
    export let isCurrentDay;
    export let todos;
</script>
{#if isCurrentDay}
<td tabindex="0"  class="current-day" role="gridcell" aria-selected={true}>
    <h2>{day}</h2>
    {#each todos as todo}
    <p>{todo.text}</p>
    {/each}
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

    td:focus {
        outline: 3px solid black;
    }

    .not-in-month {
        background: gray
    }

    .current-day {
        background: var(--color-primary);
    }
</style>