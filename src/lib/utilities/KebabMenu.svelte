<script>
    import { fade } from 'svelte/transition';
    import { deleteTodo } from '$lib/todosStores';
    import EditModal from '$lib/utilities/EditModal.svelte';
    export let todo;
    export let black = false;
    let menu;
    let menuButton;
    let focusedMenuItem = 0;
    let toggle = false;
    let isEditing = false;
    const actions = [{
        name: 'Delete',
        onclick: deleteTodo
    }, 
    {
        name: 'Edit',
        onclick: handleEditButtonClick
    }];

    function handleMenuButtonClick() {
        // Extremely big brain toggle mechanic
        toggle ^= true;
    }

    function handleEditButtonClick() {
        isEditing = true;
        toggle = false;
    }

    function closeEditModal() {
        isEditing = false;
        menuButton.focus();
    }


    function handleKeydown(event) {
        let menuItems = [...menu.children];
        if(event.key === 'Escape') {
            toggle = false;
            menuButton.focus();
        }
        else if(event.key === 'ArrowUp'|| event.key === 'ArrowDown'){
            event.preventDefault();
            if(event.key === 'ArrowUp') focusedMenuItem--;
            if(event.key === 'ArrowDown') focusedMenuItem++;
            menuItems.at(focusedMenuItem % menuItems.length).focus();
        }
    }


    function handleToggle(element) {
        console.log('toggled')
        menu = element;
        focusedMenuItem = 0;
        [...menu.children][0].focus();
    }

    function handleFocusOut(event) {
        // Toggle off menu if click outside of it
        console.log('focusout')
        // Exclude menubutton to remove inconsistencies when pressed while toggled open
       if(!menu.contains(event.relatedTarget)  && event.relatedTarget !== menuButton) toggle = false;
    }
</script>

<button on:click={handleMenuButtonClick} bind:this={menuButton} aria-label="actionmenu" aria-haspopup="true" aria-expanded={toggle ? 'true' : null} aria-controls="menu" id="menu-button">
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" class:black>
        <circle cx="8" cy="2.5" r=".75"/>
        <circle cx="8" cy="8" r=".75"/>
        <circle cx="8" cy="13.5" r=".75"/>
        <title>Action Menu</title>
    </svg>

</button>
{#if toggle}
    <div id="menu" role="menu" aria-labelledby="menu-button" tabindex="-1" use:handleToggle transition:fade>
        {#each actions as action, i (i)}
            <button role="menuitem" on:click={() => action.onclick(todo)} tabindex="-1"  on:keydown={handleKeydown} on:focusout={handleFocusOut}>{action.name}</button>
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

    .black {
        color: black;
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
        transition: background-color .3s;
        padding: 1em;
    }

    #menu > button:is(:focus, :hover) {
        background-color: var(--color-gray);
    }
</style>