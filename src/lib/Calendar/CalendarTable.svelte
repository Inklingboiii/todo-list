<script>
    let displayedDate = new Date();
    // Change later to default for internation setting?
    $: displayedMonth =  displayedDate.toLocaleString('en', { month: 'long' });
    $: displayedYear =  displayedDate.getFullYear();
    let cellArray = [];
    $: {
        cellArray = [];
        let day = new Date(displayedYear, displayedDate.getMonth() + 1, 0);
        let numberOfDaysInMonth = day.getDate();
        day.setDate(1);
        // Sunday - Saturday : 0 - 6
        day = day.getDay();
        console.log(day)
        for(let tableWeek = 0; tableWeek < 6; tableWeek++) {
            cellArray.push([]);
            for(let tableDay = 0; tableDay < 7; tableDay++) {
                let result = ((tableDay + tableWeek * 7) % numberOfDaysInMonth) + 1
                cellArray[tableWeek][tableDay] = result;
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