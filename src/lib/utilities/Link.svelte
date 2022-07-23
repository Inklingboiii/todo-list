<script>
    export let href;
    export let newTab = false;
</script>

<a href={href} target={newTab ? '_blank' : null}>
    <slot></slot>
</a>

<style>
    a {
        text-decoration: none;
        /* Hover animation*/
        background: linear-gradient(currentColor, currentColor);
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 0% 0.15em;
        transition: font-weight 0.2s linear, background-size 0.35s ease-in-out;
    }

    a:is(:hover, :focus) {
        background-size: 100% 0.15em;
        font-weight: 700;
    }
</style>