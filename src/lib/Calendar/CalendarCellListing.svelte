<script>
    export let todos;
</script>

{#if todos.length > 0}
<ul>
    {#each todos as todo}
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