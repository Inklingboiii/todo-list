<script>
    import Modal from '$lib/utilities/Modal.svelte';
    import Button from '$lib/utilities/Button.svelte';
    import CallToAction from '$lib/utilities/CallToAction.svelte';
    export let closeModal;
    export let day;
    export let todos;
    export let month;
    export let year;
</script>

<Modal {closeModal}>
    <article>
        <h3 id="heading">{day} {month} {year}</h3>
        {#each todos as todo}
            <p>{todo.text}</p>
        {/each}
        <div>
            <CallToAction id="first" href="/add-todos">Add todos</CallToAction>
            <Button minimal type="button" onClick={closeModal} id="last">Close</Button>
        </div>
    </article>
</Modal>