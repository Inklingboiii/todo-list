<script>
    import { setContext } from 'svelte';
    import currentTime from '$lib/utilities/currentTimeStore';
    import calendarStore from './calendarStore.ts';
    import CalendarCellContainer from './CalendarCellContainer.svelte';
    import { todosStore, inactiveTodosStore } from '$lib/todosStores'
    import CalendarCell from "./CalendarCell.svelte";
    import createCellArray from './createCellArray';


    let displayedDate = new Date();
    // Change later to default for internation setting?
    $: displayedMonth = displayedDate.toLocaleString('en', { month: 'long' });
    $: displayedYear = displayedDate.getFullYear();
    $: cellArray = createCellArray(displayedDate, [...$todosStore, ...$inactiveTodosStore]);
    $: setCurrentDayInCalendar(cellArray, new Date($currentTime))
    $: calendarStore.set(cellArray.flat());
    setContext('calendar', calendarStore);

    function setCurrentDayInCalendar(cellArray, currentDate) {
        if(currentDate.getFullYear() !== displayedYear) return;
        if(currentDate.getMonth() !== displayedDate.getMonth()) return;
        let day = new Date(currentDate.getFullYear(), currentDate.getMonth()).getDay();
        // Exception for sundays
        let offset = day === 0 ? 6 : day - 1;
        cellArray[Math.floor((currentDate.getDate() + offset - 1) / 7)][(currentDate.getDate() + offset - 1) % 7].isCurrentDay = true;
    }

    function handleKeydown(event) {
        switch(event.key) {
            // Add a day
            case 'ArrowRight': return displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() + 1);
            // Remove a day
            case 'ArrowLeft': return displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() - 1);
            // Remove a Week
            case 'ArrowUp': return displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() - 7);
            // Add a Week
            case 'ArrowDown': return displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() + 7);
            case 'Home':
            case 'End':  {
                // Set to first day of week (Monday)
                let currentDay = displayedDate.getDay();
                // To counteract weeks starting with sundays
                if(currentDay === 0) currentDay = 7;
                // 1 === Monday
                let distance = 1 - currentDay;
                // Add 6 days if if end key pressed so it goes from monday to sunday
                return displayedDate = new Date(displayedYear, displayedDate.getMonth(), displayedDate.getDate() + distance + (event.key === 'End' ? 6 : 0));
            }
            // Remove a Month
            case 'PageUp': return displayedDate = new Date(displayedYear, displayedDate.getMonth() - 1, displayedDate.getDate());
            // Add a Month
             case 'PageDown': return displayedDate = new Date(displayedYear, displayedDate.getMonth() + 1, displayedDate.getDate());
        }
    }

    function handleDateUpdate(event) {
        console.log('update')
        let {inMonth, day} = event.detail;
        if(inMonth) displayedDate = new Date(displayedYear, displayedDate.getMonth(), day);
        else {
            // From last month
            if(day > 15) displayedDate = new Date(displayedYear, displayedDate.getMonth() - 1, day);
            // From next month
            else displayedDate = new Date(displayedYear, displayedDate.getMonth() + 1, day)
        }
    }

</script>
<div id="heading">
    <button type="button" aria-label="Previous Month" on:click={() => handleKeydown({key: 'PageUp'})}>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
            <path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"></path>
        </svg>
    </button>
    <h2 aria-live="polite" id="caption">{displayedMonth} {displayedYear}</h2>
    <button type="button" aria-label="Next Month" on:click={() => handleKeydown({key: 'PageDown'})}>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24">
            <path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path>
        </svg>
    </button>
</div>
<table role="grid" aria-readonly="true" aria-labelledby="caption" on:keydown={handleKeydown}>
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
        {#each cellArray as week, numWeek}
        <tr>
            {#each week as cell, numDay}
            <CalendarCellContainer index={numWeek * 7 + numDay} month={displayedMonth} year={displayedYear} on:dateupdate={handleDateUpdate}>
                <CalendarCell index={numWeek * 7 + numDay} />
            </CalendarCellContainer>
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

    #heading {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 1em;
    }

    #heading > h2 {
        /* Avoid button movement due to varying text length */
        min-width: 16ch;
        text-align: center;
    }

    #heading button {
        cursor: pointer;
        background-color: var(--color-dark);
        border: none;
        border-radius: 90% 10% 90% 10% / 10% 90% 10% 90%;
        padding: 1em;
        
    }

    #heading svg {
        fill: white;
        transition: fill 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    #heading button:is(:focus, :hover) svg {
        fill: var(--color-primary);
    }
</style>