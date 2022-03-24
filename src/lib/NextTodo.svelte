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
          'second': 'numeric'
        }).format(nextTodo.deadline);
    let currentTime = Date.now();
    const lateLimit = 1000 * 60 * 60 * 24 // A day

    onMount(() => {
        let deadlineInterval = setInterval(() => {
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
    <time class:late={nextTodo.deadline - currentTime < lateLimit}>
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

    .late {
        color: var(--color-primary);
        font-weight: bold;
    }
</style>
