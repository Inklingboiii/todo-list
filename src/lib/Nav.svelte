<script>
    import Link from '$lib/Link.svelte';
</script>
<nav>
    <Link href="/">Home</Link>
    <Link href="/add-todos">Add Todos</Link>
    <Link href="/calendar">Calendar</Link>
</nav>

<style>
    nav {
        display: flex;
        justify-content: space-around;
        padding:1em;
        background: black;
    }

    :global(nav a) {
        color: white;
    }
</style>