<script>
    import Modal from '$lib/utilities/Modal.svelte';
    import Button from '$lib/utilities/Button.svelte';
    import CallToAction from '$lib/utilities/CallToAction.svelte';
    export let closeModal;
    export let day;
    export let todos;
    console.log(todos)
</script>

<Modal {closeModal}>
    <h3 id="heading">{day}</h3>
    {#each todos as todo}
        <p>{todo.text}</p>
    {/each}
    <CallToAction id="first" href="/add-todos">Add todos</CallToAction>
    <Button minimal type="button" onClick={closeModal} id="last">Close</Button>
</Modal>