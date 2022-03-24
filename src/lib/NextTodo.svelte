<script>
    import { todosStore, sortTodosByDeadline } from '$lib/todosStores';
    $: nextTodo = sortTodosByDeadline($todosStore.filter((todo) => !todo.today))[0];
</script>

<article>
    <h2>Next long term goal</h2>
    <p>{nextTodo.text}</p>
    <time>{nextTodo.deadline}</time>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>
