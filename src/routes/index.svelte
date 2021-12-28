<script>
    import MainHeading from '$lib/MainHeading.svelte';
    import Quote, {loadQuotes} from '$lib/Quote.svelte';
    export let quotes;
</script>
<script context="module">
   export const load = loadQuotes;
</script>
<header>
    <MainHeading>Generic todo-list</MainHeading>
    <Quote quotes={quotes}/>
</header>
