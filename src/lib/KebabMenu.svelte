<script>
    import { fade } from 'svelte/transition';
    let toggle = false;
    const actions = ['Delete', 'Edit'];

    function handleKeyup(event) {
        console.log('keyup')
        if(event.key === 'ArrowDown') {
            console.log('down')
        }
    }
</script>

<!-- Extremely big brain toggle mechanic -->

<button on:click={() => toggle ^= true} aria-haspopup="true" aria-expanded={toggle ? 'true' : null} aria-controls="menu">
    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <circle cx="8" cy="2.5" r=".75"/>
        <circle cx="8" cy="8" r=".75"/>
        <circle cx="8" cy="13.5" r=".75"/>
    </svg>
</button>
{#if toggle}
    <div id="menu" role="menu" transition:fade>
        {#each actions as action, i (i)}
            <button role="menuitem" tabindex="-1" on:keyup={handleKeyup}>{action}</button>
        {/each}
    </div>
{/if}
<style>
    button {
        border: none;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
    }

    svg {
        color: white;
    }

    #menu {
        position: absolute;
        z-index: 1;
        right: 0;
        top: 2.5em;
        background: #333;
        padding: 1em;
    }
</style>