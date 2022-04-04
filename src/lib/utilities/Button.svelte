
<button>
    <slot></slot>
</button>

<style>
    button {
        cursor: pointer;
        border: none;
        color: white;
        border: currentcolor 1px solid;
        background-color: transparent;
        padding: 1em 2.5em;
        position: relative;
        border-radius: 1em;
    }

    button::before {
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

    button:is(:focus, :hover)::before {
        transform: scaleX(100%);
    }

</style>