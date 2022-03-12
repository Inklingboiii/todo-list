<script>
    export let data;
</script>

<div>
    <input bind:value={data.value} id={data.id} name={data.name} placeholder="">
    <label for={data.id}>{data.labelText}</label>
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