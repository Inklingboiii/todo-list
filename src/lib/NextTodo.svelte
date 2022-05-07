<script>
    import { todosStore, sortTodosByDeadline, expireTodo } from '$lib/todosStores';
    import currentTime from '$lib/utilities/currentTimeStore';
    const lateLimit = 1000 * 60 * 60 * 24 // A day
    let nextTodo;
    let deadline;
    todosStore.subscribe((todos) => {
        nextTodo = sortTodosByDeadline(todos.filter((todo) => !todo.today))[0];
        deadline = new Intl.DateTimeFormat('default', {
          hour: 'numeric',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          minute: 'numeric',
        }).format(nextTodo.deadline);
    });
    $: if(nextTodo.deadline <= $currentTime) expireTodo(nextTodo, false);
</script>

<article>
    <h2>Next long term goal</h2>
    <p>{nextTodo.text}</p>
    <time class:late={nextTodo.deadline - lateLimit < $currentTime }>
        {deadline}
    </time>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
</style>
