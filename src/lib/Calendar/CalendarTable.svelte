<script>
    import CalendarCell from "./CalendarCell.svelte";

    let displayedDate = new Date();
    // Change later to default for internation setting?
    $: displayedMonth =  displayedDate.toLocaleString('en', { month: 'long' });
    $: displayedYear =  displayedDate.getFullYear();
    let cellArray = [];
    $: {
        cellArray = [];
        let numberOfDaysInMonth = getNumberOfDaysInMonth(displayedYear, displayedDate.getMonth());
        let numberOfDaysInLastMonth = getNumberOfDaysInMonth(displayedYear, displayedDate.getMonth() - 1);
        let day = new Date(displayedYear, displayedDate.getMonth(), 1);
        // Sunday - Saturday : 0 - 6
        day = day.getDay();
        // Exception for sundays
        let offset = day === 0 ? 6 : day - 1;
        let offsetIncrementor = 0;
        for(let tableWeek = 0; tableWeek < 6; tableWeek++) {
            cellArray.push([]);
            // Add days of previous month
            if(tableWeek === 0) {
                    for(let i = 0; i < offset; i++) {
                        cellArray[tableWeek][i] = {day: numberOfDaysInLastMonth - offset + i + 1, inMonth: false, isCurrentDay: false};
                    }
            }
            for(let tableDay = 0; tableDay < 7; tableDay++) {
                if(tableWeek === 0 && tableDay < offset) {
                    offsetIncrementor++
                    continue;
                }
                // numofweeks * 7 + additional days - the incrementor for the days of the previous month and the modulus for the days of the next month and finally plus one since calendars are 1 indexed and arrays zero indexed
                let day = (((tableDay + tableWeek * 7) - offsetIncrementor) % numberOfDaysInMonth) + 1
                cellArray[tableWeek][tableDay] = {day, inMonth: ((tableDay + tableWeek * 7) - offsetIncrementor) + 1 < numberOfDaysInLastMonth, isCurrentDay: false};
            }
        }
        cellArray[Math.floor(displayedDate.getDate() / 7)][displayedDate.getDate() % 7 + offset - 1].isCurrentDay = true;
    }

    // https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript#answer-1185804
    function getNumberOfDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
</script>

<table>
    <caption>{displayedMonth} {displayedYear}</caption>
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
            <CalendarCell {...cell}/>
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