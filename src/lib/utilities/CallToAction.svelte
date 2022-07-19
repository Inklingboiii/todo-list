<script>
    export let href;
    export let id = null;
</script>

<a {href} {id}>
    <slot></slot>
</a>

<style>
    a {
        text-decoration: none;
        text-align: center;
        display: inline-block;
        min-width: 10ch;
        min-height: 44px;
        background-color: var(--color-primary-light);
        color: black;
        padding: 1em;
        border-radius: 20% 10% / 10% 20%;

        /* Outline animation */
        outline: 3px solid transparent;
        transition: outline-offset 0.3s ease-in, outline-color 0.3s ease-out;
    }

    a:is(:hover, :focus) {
        outline-color: white;
        outline-offset: -0.5em;
    }
</style>