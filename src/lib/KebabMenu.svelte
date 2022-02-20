<script>
    import { fade } from 'svelte/transition';
    import { deleteTodo } from '$lib/todosStores';
    import '$lib/EditModal.svelte';
    import EditModal from '$lib/EditModal.svelte';
    export let todo;
    let menu;
    let menuButton;
    let focusedMenuItem = 0;
    let toggle = false;
    let typeOfClick; // 0 === keyboard; 1 === mouse
    let isEditing = false;
    const actions = [{
        name: 'Delete',
        onclick: deleteTodo
    }, 
    {
        name: 'Edit',
        onclick: handleEditButtonClick
    }];

    function handleMenuButtonClick(event) {
        // Extremely big brain toggle mechanic
        toggle ^= true;
        typeOfClick = event.detail;
    }

    function handleEditButtonClick() {
        isEditing = true;
        toggle = false;
    }

    function closeEditModal() {
        isEditing = false;
        menuButton.focus();
    }


    function handleKeyup(event) {
        let menuItems = [...menu.children];
        if(event.key === 'Escape') menuButton.focus();
        else {
            if(event.key === 'ArrowUp' || event.key === 'ArrowRight') focusedMenuItem--;
            if(event.key === 'ArrowDown' || event.key === 'ArrowLeft') focusedMenuItem--;
            menuItems.at(focusedMenuItem % menuItems.length).focus();
        }
    }


    function handleToggle(element) {
        menu = element;
        focusedMenuItem = 0;
        // Focus first item if opened via keyboard
        if(typeOfClick) {
            menu.focus();
            console.log('menu focused')
        } else {
            console.log('first item focused');
            [...menu.children][0].focus();
        }
    }

    function handleFocusOut(event) {
        // Toggle off menu if click outside of it
        console.log('focusout')
       if(!menu.contains(event.relatedTarget)) toggle = false;
    }
</script>

<button on:click={handleMenuButtonClick} bind:this={menuButton} aria-haspopup="true" aria-expanded={toggle ? 'true' : null} aria-controls="menu" id="menu-button">
    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <circle cx="8" cy="2.5" r=".75"/>
        <circle cx="8" cy="8" r=".75"/>
        <circle cx="8" cy="13.5" r=".75"/>
    </svg>
</button>
{#if toggle}
    <div id="menu" role="menu" aria-labelledby="menu-button" tabindex="-1" on:focusout={handleFocusOut} use:handleToggle transition:fade>
        {#each actions as action, i (i)}
            <button role="menuitem" tabindex="-1" on:click={() => action.onclick(todo)} on:keydown={handleKeyup} on:focusout={handleFocusOut}>{action.name}</button>
        {/each}
    </div>
{/if}
{#if isEditing}
    <EditModal {todo} {closeEditModal}/>
{/if}

<style>
    button {
        border: none;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
        color: white;
    }


    svg {
        color: white;
    }

    #menu {
        position: absolute;
        z-index: 1;
        right: 0;
        top: 2.5em;
        display: flex;
        flex-direction: column;
        background-color: hsl(0, 0%, 20%);
    }

    #menu > button {
        padding: 1em;
        transition: background-color .3s;
    }

    #menu > button:is(:focus, :hover) {
        background-color: var(--color-gray);
    }
</style>