<script>
    import Modal from '$lib/utilities/Modal.svelte';
    import Button from '$lib/utilities/Button.svelte';
    import CallToAction from '$lib/utilities/CallToAction.svelte';
    export let closeModal;
    export let day;
    export let todos;
    export let month;
    export let year;
    let dailyTodos = todos.filter((todo) => todo.today);
    let goalTodos = todos.filter((todo) => !todo.today)
</script>

<Modal {closeModal}>
    <article>
        <h3 id="heading">{day} {month} {year}</h3>
        <div class="todos">
            <div>
                <h4>Daily todos</h4>
                {#if dailyTodos.length > 0}
                    <ul>
                        {#each dailyTodos as todo}
                            <li>{todo.text}</li>
                        {/each}
                    </ul>
                {:else}
                    <p>None</p>
                {/if}
            </div>
            <div>
                <h4>Long term goals</h4>
                {#if goalTodos.length > 0}
                    <ul>
                        {#each goalTodos as todo}
                            <li>{todo.text}</li>
                        {/each}
                    </ul>
                {:else}
                    <p>None</p>
                {/if}
            </div>
        </div>
        
        <div class="button-group">
            <CallToAction id="first" href="/add-todos">Add todos</CallToAction>
            <Button minimal type="button" onClick={closeModal} id="last">Close</Button>
        </div>
    </article>
</Modal>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 1em;
        text-align: start;
        cursor: initial;
    }

    .todos {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
    }
    
    .button-group {
        display: flex;
        justify-content: space-between;
    }
</style>