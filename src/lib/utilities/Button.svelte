<script>
    export let minimal = false;
    export let type = null;
    export let onClick = null;
    export let id = null;
</script>
<button class:minimal class:animated={!minimal} {type} {id} on:click={onClick}>
    <slot></slot>
</button>

<style>
    button {
        cursor: pointer;
        background-color: transparent;
        min-width: 10ch;
        /* For accessibility https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
        min-height: 44px;
    }

    /* Animated version */
    .animated {
        color: currentColor;
        border: currentcolor 1px solid;
        border-radius: 1em;
        padding: 1em 2.5em;
        position: relative;
        overflow: hidden;
    }

    .animated::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: 1em;
        transform: scaleX(0%);
        transform-origin: 0%;
        transition: transform 0.5s ease-in-out;
        background-color: var(--color-primary-dark);
    }

    .animated:is(:focus, :hover)::before {
        transform: scaleX(100%);
    }

    /* Minimal version */
    .minimal {
        color: var(--color-primary);
        border: none;
        border-radius: 0.5em;
        padding: 1em;
        outline: 2px solid transparent;
        outline-offset: -1em;
        transition: outline-offset 0.3s ease-in, outline-color 0.3s ease-out;
    }

    .minimal:is(:focus, :hover) {
        outline-color: currentColor;
        outline-offset: 0px;
    }

</style>