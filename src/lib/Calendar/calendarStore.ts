import { writable, Writable } from 'svelte/store';
type Cell = {
	day: number,
	inMonth: boolean,
	isSelectedDay: boolean,
	isCurrentDay: boolean,
	todos: Array<any>
}

const calendarStore: Writable<Array<Cell>> = writable([]);

export default calendarStore;