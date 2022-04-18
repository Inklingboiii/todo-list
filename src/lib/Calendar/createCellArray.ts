export default function createCellArray(date: Date, todos: [any]) {
    let cellArray = [];
    let year = date.getFullYear();
    let month = date.getMonth();
    let numberOfDaysInMonth = getNumberOfDaysInMonth(year, month);
    let numberOfDaysInLastMonth = getNumberOfDaysInMonth(year, month);
    // Sunday - Saturday : 0 - 6
    let day = new Date(year, month).getDay();
    // Exception for sundays
    let offset = day === 0 ? 6 : day - 1;
    let offsetIncrementor = 0;
    for(let tableWeek = 0; tableWeek < 6; tableWeek++) {
        cellArray.push([]);
        // Add days of previous month
        if(tableWeek === 0) {
                for(let i = 0; i < offset; i++) {
                    cellArray[tableWeek][i] = {
                        day: numberOfDaysInLastMonth - offset + i + 1,
                        inMonth: false,
                        isCurrentDay: false,
                        todos: []
                    };
                }
        }
        for(let tableDay = 0; tableDay < 7; tableDay++) {
            if(tableWeek === 0 && tableDay < offset) {
                offsetIncrementor++
                continue;
            }
            // numofweeks * 7 + additional days - the incrementor for the days of the previous month and the modulus for the days of the next month and finally plus one since calendars are 1 indexed and arrays zero indexed
            let day = (((tableDay + tableWeek * 7) - offsetIncrementor) % numberOfDaysInMonth) + 1
            cellArray[tableWeek][tableDay] = {
                day,
                inMonth: ((tableDay + tableWeek * 7) - offsetIncrementor) + 1 < numberOfDaysInLastMonth,
                isCurrentDay: false,
                todos: []
            };
        }
    }
    // Get the week by dividing the day by 7 + offset and the day from its remainder + offset
    cellArray[Math.floor((date.getDate() + offset - 1) / 7)][(date.getDate() + offset - 1) % 7].isCurrentDay = true;

    // Loop through todos and assign them to a specific day
    todos.map((todo) => {
        let todoDate = new Date(todo.deadline);
        if(todoDate.getFullYear() === year && todoDate.getMonth() === date.getMonth()) {
            cellArray[Math.floor((todoDate.getDate() + offset - 1) / 7)][(todoDate.getDate() + offset - 1) % 7].todos.push(todo);
        }
    })
    return cellArray;
}

// https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript#answer-1185804
function getNumberOfDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}