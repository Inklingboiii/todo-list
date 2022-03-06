<script>
    export let todo;
    export let closeEditModal;
    import { editTodo } from '$lib/todosStores';

    function modal(modalElement) {
        modalElement.querySelector('input').focus();
    }

    function handleSubmit() {
        editTodo(todo);
        closeEditModal();
    }

    function handleKeydown(event) {
        if(event.key === 'Escape') closeEditModal();
    }
</script>

<form role="dialog" aria-modal="true" aria-labelledby="heading" on:submit|preventDefault={handleSubmit} on:keydown={handleKeydown} use:modal>
    <h3 id="heading">Edit Todo</h3>
    <input bind:value={todo.text}>
    <button>Save</button>
    <button type="button" on:click={closeEditModal}>Cancel</button>
</form>
<div class="overlay"></div>

<style>
    form {
        position: fixed;
        inset: 20%;
        background: white;
        z-index: 10;
    }

   .overlay {
        position: fixed;
        inset: 0;
        background: var(--color-dark);
        z-index: 1;
    }
</style>