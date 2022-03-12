<script>
    export let todo;
    export let closeEditModal;
    import { editTodo } from '$lib/todosStores';
    import { fly } from 'svelte/transition';
    import FloatingInput from '$lib/FloatingInput.svelte';
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

<form role="dialog" aria-modal="true" aria-labelledby="heading" on:submit|preventDefault={handleSubmit} on:keydown={handleKeydown} use:modal transition:fly={{y: 500, duration: 500}}>
    <h3 id="heading">Edit Todo</h3>
    <div>
        <input bind:value={inputValue} id="first">
        <button>Save</button>
        <button type="button" on:click={closeEditModal} id="last">Cancel</button>
    </div>
</form>
<!-- Used as tint and to close modal on focusout -->
<div class="overlay" on:click={closeEditModal}></div>

<style>
    form {
        position: fixed;
        inset: 20%;
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
    form > div {
        display: flex;
        align-items: center;
    }

    #heading {
        text-align: center;
    }
</style>