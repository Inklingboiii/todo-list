<script>
    export let todo;
    import { expireTodo } from '$lib/todosStores';
    let checked = false;
    $: if(checked)  {
        expireTodo(todo, true);
        checked = false;
    }
</script>

<input type="checkbox" bind:checked>