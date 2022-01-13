<script>
    import MainHeading from '$lib/MainHeading.svelte';
    import Quote from '$lib/Quote.svelte';
    import TodosCard from '$lib/TodosCard.svelte';
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
<header>
    <MainHeading>Generic to-do list</MainHeading>
    <Quote quote={quote} />
    <TodosCard />
</header>
