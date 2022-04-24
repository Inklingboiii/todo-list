<script>
    export let isCurrentDay;
    export let inMonth;
    const focus = el => el.focus();
    console.log(isCurrentDay, inMonth)
</script>

{#if isCurrentDay}
    <td tabindex="0"  class="current-day" role="gridcell" aria-selected={true} use:focus>
        <slot></slot>
    </td>
{:else}
    <td tabindex="-1" class:not-in-month={!inMonth}>
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