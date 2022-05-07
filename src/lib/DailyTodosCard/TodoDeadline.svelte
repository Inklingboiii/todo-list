<script>
    export let todo;
    import { expireTodo } from '$lib/todosStores';
    import currentTime from '$lib/utilities/currentTimeStore';
    //let currentTime = Date.now();
    const lateLimit = 1000 * 60 * 60; // 1 hour
    $: remainingTimeInMs = todo.deadline - $currentTime;
    $: remainingTime = humanReadableDuration(remainingTimeInMs);

    $: if(todo.deadline <= $currentTime) expireTodo(todo, false);


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
