<script>
    export let todo;
    export let closeEditModal;
    import { editTodo } from '$lib/todosStores';
    import { fly } from 'svelte/transition';
    import Button from '$lib/utilities/Button.svelte';
    let firstTabElement;
    let lastTabElement;
    let inputValue = todo.text;

    function modal(modalElement) {
        firstTabElement = modalElement.querySelector('#first')
        firstTabElement.focus();
        lastTabElement = modalElement.querySelector('#last');
    }

    function handleSubmit() {
        todo.text = inputValue;
        editTodo(todo);
        closeEditModal();
    }

    function handleKeydown(event) {
        if(event.key === 'Escape') closeEditModal();
        trapTabKey(event);
    }

    // https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
    function trapTabKey(event) {
        if(event.key === 'Tab') {
            
            // Shift + Tab => Backwards tab
            if(event.shiftKey) {
                if(document.activeElement === firstTabElement) {
                    event.preventDefault();
                    lastTabElement.focus();
                }

            // Tab
            } else {
                if(document.activeElement === lastTabElement) {
                    event.preventDefault();
                    firstTabElement.focus();
                }
            }
        }
    }
</script>

<form role="dialog" aria-modal="true" aria-labelledby="heading" on:submit|preventDefault={handleSubmit} on:keydown={handleKeydown} use:modal transition:fly={{y: 500, duration: 300}}>
    <h3 id="heading">Edit Todo</h3>
    <input bind:value={inputValue} id="first">
    <div>
        <Button>Save</Button>
        <Button minimal type="button" onClick={closeEditModal} id="last">Cancel</Button>
    </div>
</form>
<!-- Used as tint and to close modal on focusout -->
<div class="overlay" on:click={closeEditModal}></div>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        gap: 1em;
        position: fixed;
        inset: 0;
        max-height: calc(10% + 5rem);
        max-width: calc(30% + 5rem);
        padding: 1em;
        margin: auto;
        background: white;
        color: black;
        z-index: 10;
    }

   .overlay {
        position: fixed;
        inset: 0;
        background: var(--color-dark);
        z-index: 1;
    }
    
    input {
        width: 100%;
    }

    form > div {
        display: flex;
        gap: 1em;
        align-self: flex-end;
    }
</style>