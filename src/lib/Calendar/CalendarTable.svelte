<script>
    import { todosStore, inactiveTodosStore } from '$lib/todosStores'
    import CalendarCell from "./CalendarCell.svelte";
    import createCellArray from './createCellArray';


    let displayedDate = new Date();
    // Change later to default for internation setting?
    $: displayedMonth = displayedDate.toLocaleString('en', { month: 'long' });
    $: displayedYear = displayedDate.getFullYear();
    $: cellArray = createCellArray(displayedDate, [...$todosStore, ...$inactiveTodosStore]);

</script>

<table role="grid">
    <caption aria-live="polite">{displayedMonth} {displayedYear}</caption>
    <colgroup span="7"></colgroup>
    <thead>
        <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
    </thead>
    <tbody>
        {#each cellArray as week}
        <tr>
            {#each week as cell}
            <CalendarCell {...cell} date={displayedDate}/>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        margin-inline: auto;
        min-width: 80%;
        border: solid 1px black;
        border-collapse: collapse;
        table-layout: fixed;
    }
</style>