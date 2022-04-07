<script>
    export let text;
    export let name;
    export let required;
</script>

<div>
    <input bind:value={text} id={name} {name} {required} placeholder="">
    <label for={name}><slot></slot></label>
</div>

<style>
    div {
        position: relative;
        border-bottom: 2px solid currentColor;
    }

    div:focus-within {
        transform: scaleX(1);
    }

    input {
        border: none;
        background: none;
        overflow: hidden;
        margin: 0;
        width: 100%;
        height: 100%;
        color: currentcolor;
    }

    label {
        position: absolute;
        left: 0;
        right: 0;
        transform: translateY(-0.05em);
        transform-origin: 0%;
        transition: transform 0.5s;
    }

    div:focus-within > label,
    input:not(:placeholder-shown) + label {
        transform: scale(0.8) translateY(-2em);
    }
</style>