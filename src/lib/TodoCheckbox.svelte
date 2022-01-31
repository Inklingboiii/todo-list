<script>
    export let todo;
    import { expireTodo } from '$lib/todosStores';
    let checked = false;
    /*$: {
        console.log('checked', checked, todo.text)
        if(checked) expireTodo(todo, true);
    }*/
    function completeTodo(event) {
        checked = !checked
        if(checked) expireTodo(todo, true);
    }
</script>

<input type="checkbox" on:input={completeTodo} bind:checked>