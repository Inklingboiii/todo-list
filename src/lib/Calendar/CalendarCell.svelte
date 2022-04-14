<script>
    export let day;
    export let inMonth;
    export let isCurrentDay;
</script>
<td class:not-in-month={!inMonth} class:current-day={isCurrentDay}>{day}</td>

<style>
    td {
        border: 1px solid black;
        text-align: center;
        cursor: pointer;
    }

    .not-in-month {
        background: gray
    }

    .current-day {
        background: var(--color-primary);
    }
</style>