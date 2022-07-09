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
                            <li>
                                {#if todo.succeeded === false}
                                    <s>{todo.text}</s>
                                {:else if todo.succeeded === true}
                                    {todo.text} 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.837 17.837" width="16" height="16" style="enable-background:new 0 0 17.837 17.837" xml:space="preserve"><path style="fill:var(--color-primary)" d="M16.145 2.571a.7.7 0 0 0-.99 0L6.92 10.804l-4.241-4.27a.698.698 0 0 0-.989 0L.204 8.019a.703.703 0 0 0 0 .99l6.217 6.258a.704.704 0 0 0 .99 0L17.63 5.047a.7.7 0 0 0 0-.994l-1.485-1.482z"/></svg>
                                {:else}
                                    {todo.text}
                                {/if}
                            </li>
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
    }

    #heading {
        text-align: center;
    }

    .todos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
    }
    
    .button-group {
        display: flex;
        justify-content: space-between;
    }
</style>