<script>
    export let todo;
    import { onMount } from 'svelte';
    import { expireTodo } from '$lib/todosStores';
    let currentTime = Date.now();
    const lateLimit = 1000 * 60 * 60; // 1 hour
    $: remainingTimeInMs = todo.deadline - currentTime;
    $: remainingTime = humanReadableDuration(remainingTimeInMs);

    onMount(() => {
        let deadlineInterval = setInterval(() => {
            currentTime = Date.now();
            // Check if todo expired
            if(todo.deadline <= currentTime) {
                clearInterval(deadlineInterval);
                expireTodo(todo, false);
            }
        }, 1000)
    });


    // https://stackoverflow.com/a/65677584/13864145
    function humanReadableDuration(msDuration) {
    const h = Math.floor(msDuration / 1000 / 60 / 60);
    const m = Math.floor((msDuration / 1000 / 60 / 60 - h) * 60);
    const s = Math.floor(((msDuration / 1000 / 60 / 60 - h) * 60 - m) * 60);

    // To get time format 00:00:00
    const seconds = s < 10 ? `0${s}` : `${s}`;
    const minutes = m < 10 ? `0${m}` : `${m}`;
    const hours = h < 10 ? `0${h}` : `${h}`;

    return `${hours}h ${minutes}m ${seconds}s`;
    }
</script>


<time class:late={remainingTimeInMs < lateLimit}>
    {remainingTime}
</time>

<style>
    .late {
        color: var(--color-primary);
        font-weight: bold;
    }
</style>