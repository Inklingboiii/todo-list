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
        background-color: var(--color-primary);
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