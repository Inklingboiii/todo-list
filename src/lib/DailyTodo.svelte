<script>
    export let todo;
</script>

<li>
    <label>
        <p>{todo.text}</p>
        <input type="checkbox">
    </label>
</li>

<style>
    label {
        display: flex;
    }
</style>