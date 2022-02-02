<script>
    import { fade } from 'svelte/transition';
    let toggle = false;
</script>

<!-- Extremely big brain toggle mechanic -->

<button on:click={() => toggle ^= true} aria-haspopup="true" aria-expanded={toggle ? 'true' : null} aria-controls="menu" id="menu-button">
    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
        <circle cx="8" cy="2.5" r=".75"/>
        <circle cx="8" cy="8" r=".75"/>
        <circle cx="8" cy="13.5" r=".75"/>
    </svg>
</button>
{#if toggle}
    <ul id="menu" role="menu" transition:fade>
        <li role="menuitem">Delete</li>
    </ul>
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

    ul {
        position: absolute;
        z-index: 1;
        right: 0;
        top: 2.5em;
        background: #333;
        padding: 1em;
    }
</style>