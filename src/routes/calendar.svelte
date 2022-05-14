<script>
    import MainHeading from '$lib/utilities/MainHeading.svelte';
    import CalendarTable from '$lib/Calendar/CalendarTable.svelte';
</script>

<svelte:head>
	<title>Calendar</title>
</svelte:head>
<header>
    <MainHeading>Calendar</MainHeading>
</header>
<main>
    <CalendarTable />
</main>

<style>
    main {
        flex-grow: 2;
    }
</style>