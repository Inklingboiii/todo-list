<script>
    let displayedDate = new Date();
    // Change later to default for internation setting?
    $: displayedMonth =  displayedDate.toLocaleString('en', { month: 'long' });
    $: displayedYear =  displayedDate.getFullYear();
    let cellArray = [];
    $: {
        cellArray = [];
        let day = new Date();
        day.setFullYear(displayedYear);
        day.setMonth(displayedDate.getMonth());
        day.setDate(1);
        // Sunday - Saturday : 0 - 6
        day = day.getDay();
        for(let tableWeek = 0; tableWeek < 6; tableWeek++) {
            cellArray.push([]);
            for(let tableDay = 0; tableDay < 7; tableDay++) {
                cellArray[tableWeek][tableDay] = tableDay + tableWeek * 7;
            }
        }
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
            <td>{cell}</td>
            {/each}
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        margin-inline: auto;
        min-width: 50%;
    }
</style>