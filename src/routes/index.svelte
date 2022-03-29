<script>
    import MainHeading from '$lib/MainHeading.svelte';
    import Quote from '$lib/Quote.svelte';
    import TodosCard from '$lib/DailyTodosCard/TodosCard.svelte';
    import NextTodo from '$lib/NextTodo.svelte';
    import Link from '$lib/utilities/Link.svelte';
    export let quote;
</script>
<script context="module">
    // Fetch quote
    // TODO: Fetch multiple quotes at once and cache them externally as described here: https://premium.zenquotes.io/zenquotes-documentation/#call-quotes
    /** @type {import('@sveltejs/kit').Load} */

   export async function load({fetch}) {
    const result = await fetch('./quote.json');
    const quote = await result.json();
    
        return {
           props: {
               quote
           }
        }
   }
</script>
<svelte:head>
    <title>Generic to-do list</title>
</svelte:head>

<header>
    <MainHeading>Generic to-do list</MainHeading>
    <Quote quote={quote} />
</header>
<main>
    <TodosCard />
    <NextTodo />
</main>
<footer>
    <p>Inspirational quotes provided by <Link href="https://zenquotes.io/"newTab={true}>ZenQuotes API</Link></p>
</footer>


<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
   
    @media (min-width: 50em) {
        main {
            flex-direction: row;
            justify-content: space-evenly;
        }
    }

    footer {
        background: var(--color-dark);
        color: white;
        margin: 0;
        padding-block: 1.5em;
    }

    footer > p {
        margin: auto;
        text-align: center;
    }

    :global(footer > p > a) {
        color: var(--color-accent);
    }

</style>
