<script>
    export let day;
    export let inMonth;
    export let isCurrentDay;
    export let todos;
</script>
<td class:not-in-month={!inMonth} class:current-day={isCurrentDay}>
    <h2>{day}</h2>
    {#each todos as todo}
    <p>{todo.text}</p>
    {/each}
</td>

<style>
    td {
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
    }

    .not-in-month {
        background: gray
    }

    .current-day {
        background: var(--color-primary);
    }
</style>