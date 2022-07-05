<script>
    import MainHeading from '$lib/utilities/MainHeading.svelte';
    import Quote from '$lib/Quote.svelte';
    import TodosCard from '$lib/DailyTodosCard/TodosCard.svelte';
    import NextTodo from '$lib/NextTodo.svelte';
    import Link from '$lib/utilities/Link.svelte';
    export let quotes;
</script>
<svelte:head>
    <title>Generic to-do list</title>
</svelte:head>

<header>
    <MainHeading>Generic to-do list</MainHeading>
    <Quote quotes={quotes} />
</header>
<main>
    <TodosCard />
    <NextTodo />
</main>
<footer>
    <p>Inspirational quotes provided by <Link href="https://zenquotes.io/" newTab={true}>ZenQuotes API</Link></p>
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
