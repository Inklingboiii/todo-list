<script>
    export let isCurrentDay;
    export let inMonth;
    export let day;
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const focus = el => el.focus();

    function handleClick() {
        updateDate();
        console.log(day)
    }

    function updateDate() {
        dispatch('dateupdate', {
			day,
            inMonth
		});
    }
</script>

{#if isCurrentDay}
    <td tabindex="0"  class="current-day" role="gridcell" aria-selected={true} use:focus on:click={handleClick}>
        <slot></slot>
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

    td:hover {
        outline: 3px solid black;
    }

    .not-in-month {
        background: var(--color-gray);
    }

    .current-day {
        background: var(--color-primary);
    }
</style>