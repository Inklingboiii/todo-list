<script>
    export let index;
    export let month;
    export let year;
    import { createEventDispatcher, getContext } from 'svelte';
    import CalendarModal from './CalendarModal.svelte';

    let isClicked = false;
    const dispatch = createEventDispatcher();
    let currentContainer;
    const focus = el => el.focus();
    const context = getContext('calendar');
    $: ({ isSelectedDay, inMonth, day, todos } = $context[index]);

    function handleClick() {
        console.log('click')
        updateDate();
        // Show modal if current day is clicked
        if(isSelectedDay) isClicked = true;
    }

    function handleKeyDown(event) {
        if(event.key !== 'Enter') return;
        console.log('enter')
        event.preventDefault();
        isClicked = true;
    }

    function updateDate() {
        dispatch('dateupdate', {
			day,
            inMonth
		});
    }

    function closeModal(event) {
        isClicked = false;
        // Makes it so handleClick doesnt get executed and opens the modal again
        if(event !== undefined) event.stopPropagation();
        currentContainer.focus();
    }
</script>
{#if isSelectedDay}
    <td tabindex="0"  class="current-day" role="gridcell" aria-selected={true} use:focus on:click={handleClick} on:keydown|self={handleKeyDown} bind:this={currentContainer}>
        <slot></slot>
        {#if isClicked}
            <CalendarModal {closeModal} {day} {todos} {month} {year} />
        {/if}
    </td>
{:else}
    <td tabindex="-1" class:not-in-month={!inMonth} on:click={handleClick}>
        <slot></slot>
    </td>
{/if}

<style>
    td {
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
    }

    td:hover,
    td:focus {
        outline: 3px solid black;
    }

    .not-in-month {
        background: var(--color-gray);
    }

    .current-day {
        background: var(--color-primary-light);
    }
</style>