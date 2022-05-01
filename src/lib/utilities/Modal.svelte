<script>
    export let closeModal;
    import { fly } from 'svelte/transition';
    let firstTabElement;
    let lastTabElement;

    function modal(modalElement) {
        firstTabElement = modalElement.querySelector('#first')
        firstTabElement.focus();
        lastTabElement = modalElement.querySelector('#last');
    }


    function handleKeydown(event) {
        if(event.key === 'Escape') closeModal();
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

<div role="dialog" aria-modal="true" aria-labelledby="heading" on:keydown={handleKeydown} use:modal transition:fly={{y: 500, duration: 300}}>
    <slot></slot>
</div>
<!-- Used as tint and to close modal on focusout -->
<div class="overlay" on:click={closeModal}></div>

<style>
    div[role="dialog"] {
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
</style>