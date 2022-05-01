<script>
    export let closeEditModal;
    export let todo;
    import { editTodo } from '$lib/todosStores';
    import Modal from '$lib/utilities/Modal.svelte';
    import Button from '$lib/utilities/Button.svelte';
    let inputValue = todo.text;

    function handleSubmit() {
        todo.text = inputValue;
        editTodo(todo);
        closeEditModal();
    }

</script>
<Modal closeModal={closeEditModal}>
    <h3 id="heading" >Edit Todo</h3>
    <form on:submit|preventDefault={handleSubmit}>
        <input bind:value={inputValue} id="first">
        <div>
            <Button>Save</Button>
            <Button minimal type="button" onClick={closeEditModal} id="last">Cancel</Button>
        </div>
    </form>
</Modal>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 1em;
    }
    
    input {
        width: 100%;
    }

    div {
        display: flex;
        gap: 1em;
        align-self: flex-end;
    }
</style>