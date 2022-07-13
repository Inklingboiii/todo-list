<script>
    export let todo;
    import { fly } from 'svelte/transition';
    import KebabMenu from '$lib/utilities/KebabMenu.svelte';
    import TodoDeadline from './TodoDeadline.svelte';
    import TodoCheckbox from './TodoCheckbox.svelte';
</script>

<li transition:fly={{x: 100}}>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>
        <TodoCheckbox {todo} />
        <p>{todo.text}</p>
    </label>
    <TodoDeadline {todo}/>
    <KebabMenu {todo} />
</li>

<style>
    li {
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