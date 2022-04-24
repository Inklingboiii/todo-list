<script>
    export let day;
    export let inMonth;
    export let isCurrentDay;
    export let todos;
    import CalendarCellContainer from './CalendarCellContainer.svelte';
    import DailyTodosIcon from '$lib/icons/DailyTodosIcon.svelte';
    import GoalIcon from '$lib/icons/GoalIcon.svelte';

    // Check for succeeded, so it only checks for active todos
    $: hasDailyTodos = todos.some((todo) => todo.today && todo.succeeded === undefined);
    $: hasGoals = todos.some((todo) => !todo.today);
</script>

<CalendarCellContainer {isCurrentDay} {inMonth}>
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
</CalendarCellContainer>

