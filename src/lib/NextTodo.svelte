<script>
    import { onMount } from 'svelte';
    import { todosStore, sortTodosByDeadline } from '$lib/todosStores';
    $: nextTodo = sortTodosByDeadline($todosStore.filter((todo) => !todo.today))[0];
    $: deadline = new Intl.DateTimeFormat('default', {
          hour: 'numeric',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          minute: 'numeric',
        }).format(nextTodo.deadline);
    let currentTime = Date.now();
    const lateLimit = 1000 * 60 * 60 * 24 // A day

    onMount(() => {
        let deadlineInterval = setInterval(() => {
            // console.log(nextTodo.deadline - currentTime, lateLimit)
            currentTime = Date.now();
            // Check if todo expired
            if(nextTodo.deadline <= currentTime) {
                clearInterval(deadlineInterval);
                expireTodo(nextTodo, false);
            }
        }, 1000)
    });
</script>

<article>
    <h2>Next long term goal</h2>
    <p>{nextTodo.text}</p>
    <time class:late={nextTodo.deadline - lateLimit < currentTime }>
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
