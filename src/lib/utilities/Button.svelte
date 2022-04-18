<script>
    export let minimal;
    export let type;
    export let onClick;
    export let id;
</script>
<button class:minimal class:animated={!minimal} {type}  {id} on:click={onClick}>
    <slot></slot>
</button>

<style>
    button {
        cursor: pointer;
        background-color: transparent;
    }

    /* Animated version */
    .animated {
        color: currentColor;
        border: currentcolor 1px solid;
        border-radius: 1em;
        padding: 1em 2.5em;
        position: relative;
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
        background-color: var(--color-primary);
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