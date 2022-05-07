import { writable, Writable, get } from 'svelte/store';
type Cell = {
	day: number,
	inMonth: boolean,
	isCurrentDay: boolean,
	todos: Array<any>
}

const calendarStore: Writable<Array<Cell>> = writable([]);

export default calendarStore;