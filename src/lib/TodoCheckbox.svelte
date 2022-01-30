<script>
    export let todo;
    let checked = false;
    function completeTodo() {
        console.log(checked)
    }
</script>

<input type="checkbox" on:input={completeTodo} bind:checked>