<script>
    export let todo;
    export let closeEditModal;
    import { editTodo } from '$lib/todosStores';

    function handleSubmit() {
        editTodo(todo);
        closeEditModal();
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input bind:value={todo.text}>
    <button>Save</button>
    <button type="button" on:click={closeEditModal}>Cancel</button>
</form>

<style>
    form {
        position: fixed;
        inset: 20%;
        background: var(--color-gray);
    }
</style>