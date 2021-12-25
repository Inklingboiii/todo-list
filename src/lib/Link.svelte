<script lang="ts">
    export let href;
</script>

<a href={href}>
    <slot></slot>
</a>

<style>
    a {
        text-decoration: none;
        /* Hover animation*/
        background: linear-gradient(currentColor, currentColor);
        background-repeat: no-repeat;
        background-position: bottom left;
        background-size: 0% 0%;
        transition: background-size 0.35s ease-in-out;
    }

    a:is(:hover, :focus) {
        background-size: 100% 0.15em;
    }
</style>