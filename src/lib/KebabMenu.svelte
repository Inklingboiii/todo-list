<script>
    import { fade } from 'svelte/transition';
    let menu;
    let menuButton;
    let focusedMenuItem = 0;
    let toggle = false;
    const actions = ['Delete', 'Edit'];

    function handleKeyup(event) {
        console.log('keydown', event.key)
        let menuItems = [...menu.children];
        if(event.key === 'Tab' || event.key === 'Escape') toggle = false;
        if(event.key === 'Escape') menuButton.focus();
        if(event.key === 'ArrowUp' || event.key === 'ArrowRight') focusedMenuItem--;
        if(event.key === 'ArrowDown' || event.key === 'ArrowLeft') focusedMenuItem--;
        menuItems.at(focusedMenuItem % menuItems.length).focus();
    }

    function handleToggle(element) {
        console.log('toggle', element)
        menu = element;
        focusedMenuItem = 0;
        menu.children[0].focus();
    }
</script>

<!-- Extremely big brain toggle mechanic -->

<button on:click={() => toggle ^= true} bind:this={menuButton} aria-haspopup="true" aria-expanded={toggle ? 'true' : null} aria-controls="menu" id="menu-button">
    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <circle cx="8" cy="2.5" r=".75"/>
        <circle cx="8" cy="8" r=".75"/>
        <circle cx="8" cy="13.5" r=".75"/>
    </svg>
</button>
{#if toggle}
    <div id="menu" role="menu" aira-labelledby="menu-button" use:handleToggle transition:fade>
        {#each actions as action, i (i)}
            <button role="menuitem" tabindex="-1" on:keydown={handleKeyup}>{action}</button>
        {/each}
    </div>
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
        gap: 1em;
        background-color: hsl(0, 0%, 20%);
    }

    #menu > button {
        padding: 1em;
        transition: background-color .3s;
    }

    #menu > button:is(:focus, :hover) {
        background-color: hsl(0, 0%, 50%, 0.75);
    }
</style>