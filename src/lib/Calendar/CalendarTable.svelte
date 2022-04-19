<script>
    import { todosStore, inactiveTodosStore } from '$lib/todosStores'
    import CalendarCell from "./CalendarCell.svelte";
    import createCellArray from './createCellArray';


    let displayedDate = new Date();
    // Change later to default for internation setting?
    $: displayedMonth = displayedDate.toLocaleString('en', { month: 'long' });
    $: displayedYear = displayedDate.getFullYear();
    $: cellArray = createCellArray(displayedDate, [...$todosStore, ...$inactiveTodosStore]);

    function handleKeydown(event) {
        console.log('B')
        if(event.key === 'ArrowRight') {
            // Add a day
            displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() + 1);
        } else if(event.key === 'ArrowLeft') {
            // Remove a day
            displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() - 1);
        } else if(event.key === 'ArrowUp') {
            // Remove a Week
            displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() - 7);
        } else if(event.key === 'ArrowDown') {
            // Add a Week
            displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() + 7);
        } else if(event.key === 'Home' || event.key === 'End') {
            // Set to first day of week (Monday)
            let currentDay = displayedDate.getDay();
            // To counteract weeks starting with sundays
            if(currentDay === 0) currentDay = 7;
            // 1 === Monday
            let distance = 1 - currentDay;
            // Add 6 days if if end key pressed so it goes from monday to sunday
            displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() + distance + (event.key === 'End' ? 6 : 0));
        }
    }

</script>

<table role="grid" aria-readonly="true" aria-labelledby="caption" on:keydown={handleKeydown}>
    <caption aria-live="polite" id="caption">{displayedMonth} {displayedYear}</caption>
    <thead>
        <tr>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Sunday</th>
          </tr>
    </thead>
    <tbody>
        {#each cellArray as week}
        <tr>
            {#each week as cell}
            <CalendarCell {...cell} />
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