<script>
    import MainHeading from '$lib/MainHeading.svelte';
    import Quote, {loadQuote} from '$lib/Quote.svelte';
    export let quote;
</script>
<script context="module">
   export const load = loadQuote;
</script>
<header>
    <MainHeading>Generic to-do list</MainHeading>
    <Quote quote={quote}/>
</header>
