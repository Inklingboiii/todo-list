<script>
    import { todosStore, sortTodosByDeadline, expireTodo } from '$lib/todosStores';
    import TodoCheckbox from '$lib/DailyTodosCard/TodoCheckbox.svelte';
    import KebabMenu from './utilities/KebabMenu.svelte';
    import CallToAction from '$lib/utilities/CallToAction.svelte';
    import currentTime from '$lib/utilities/currentTimeStore';
    const lateLimit = 1000 * 60 * 60 * 24 // A day
    let nextTodo;
    let deadline;
    let todoAvailable = true;
    todosStore.subscribe((todos) => {
        nextTodo = sortTodosByDeadline(todos.filter((todo) => !todo.today))[0];
        if(nextTodo !== undefined) todoAvailable = true;
        else return todoAvailable = false;
        deadline = new Intl.DateTimeFormat('default', {
          hour: 'numeric',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          minute: 'numeric',
        }).format(nextTodo.deadline);
    });
    $: if(todoAvailable) if(nextTodo.deadline <= $currentTime) expireTodo(nextTodo, false);
</script>

<section aria-labelledby="nexttodo-heading">
    <h2 id="nexttodo-heading">Next long term goal</h2>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    {#if todoAvailable}
        <div>
            <label>
                <TodoCheckbox todo={nextTodo} />
                <p>{nextTodo.text}</p>
            </label>
            <KebabMenu todo={nextTodo} black/>
        </div>
        <time class:late={nextTodo.deadline - lateLimit < $currentTime }>
            {deadline}
        </time>
    {:else}
        <p>No long term goals added</p>
        <CallToAction id="first" href="/add-todos">Add todos</CallToAction>
    {/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    section > div {
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
