<script>
    import { slide } from 'svelte/transition';
    import Nav from '$lib/Nav.svelte';
    import '../fonts.css'
    import '../global.css';
    import todoAlertStore from '$lib/todoAlertStore';
</script>
<Nav />
<ul class="alerts-container">
    {#each $todoAlertStore as alert}
        <li role="status" aria-live="polite" transition:slide>{alert}</li>
    {/each}
</ul>
<slot></slot>

<style>
    .alerts-container {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 999;
        background-color: var(--color-gray);
        color: white;
    }

    .alerts-container > [role="status"] {
        padding: 0.5em;
    }
</style>