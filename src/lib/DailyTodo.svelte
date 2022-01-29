<script>
    export let todo;
    import { onMount } from 'svelte';
    import KebabMenu from '$lib/KebabMenu.svelte';
    let currentTime = new Date();
    $: remainingTimeInMs = Math.abs(todo.deadline - currentTime);
    $: remainingTime = humanReadableDuration(remainingTimeInMs);

    onMount(() => {
        setInterval(() => {
            currentTime = new Date()
        }, 1000)
    })

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

<li>
    <label>
        <input type="checkbox">
        <p>{todo.text}</p>
    </label>
    <time>{remainingTime}</time>
    <KebabMenu />
</li>

<style>
    li {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    label {
        display: flex;
    }
</style>