<script>
    import { fly } from 'svelte/transition';
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
        let newTodo = sortTodosByDeadline(todos.filter((todo) => !todo.today))[0]
        // Only reassign value if changed, so animations get triggered correctly
        // Checl by value and not reference
        if(JSON.stringify(nextTodo) === JSON.stringify(newTodo)) return;
        nextTodo = newTodo;
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
    $: if(todoAvailable && nextTodo.deadline <= $currentTime) expireTodo(nextTodo, false);
</script>

<section aria-labelledby="nexttodo-heading">
    <h2 id="nexttodo-heading">Next long term goal</h2>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    {#if todoAvailable}
        {#key nextTodo}
            <div class="todo-container" transition:fly|local={{x: 100}}>
                <label>
                    <TodoCheckbox todo={nextTodo} />
                    <p>{nextTodo.text}</p>
                </label>
                <KebabMenu todo={nextTodo} black/>
            </div>
            <time class:late={nextTodo.deadline - lateLimit < $currentTime } class="dark" transition:fly|local={{x: 100}}>
                {deadline}
            </time>
        {/key}
    {:else}
        <div transition:fly={{x: 100}}>
            <p>No long term goals added</p>
            <CallToAction id="first" href="/add-todos">Add todos</CallToAction>
        </div>
    {/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .todo-container {
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
