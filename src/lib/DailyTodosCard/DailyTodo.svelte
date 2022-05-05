<script>
    export let todo;
    import KebabMenu from '$lib/utilities/KebabMenu.svelte';
    import TodoDeadline from '$lib/DailyTodosCard/TodoDeadline.svelte';
    import TodoCheckbox from '$lib/DailyTodosCard/TodoCheckbox.svelte';
</script>

<li>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
        <TodoCheckbox todo={todo} />
        <p>{todo.text}</p>
    </label>
    <TodoDeadline {todo}/>
    <KebabMenu {todo} />
</li>

<style>
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1em;
        position: relative;
    }

    label {
        display: flex;
        align-items: center;
    }
</style>