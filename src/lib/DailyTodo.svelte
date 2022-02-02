<script>
    export let todo;
    import KebabMenu from '$lib/KebabMenu.svelte';
    import TodoDeadline from '$lib/TodoDeadline.svelte';
    import TodoCheckbox from '$lib/TodoCheckbox.svelte';
</script>

<li>
    <label>
        <TodoCheckbox todo={todo} />
        <p>{todo.text}</p>
    </label>
    <TodoDeadline todo={todo}/>
    <KebabMenu />
</li>

<style>
    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1em;
    }

    label {
        display: flex;
    }
</style>