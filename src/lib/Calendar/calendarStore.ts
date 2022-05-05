import { writable, get } from 'svelte/store';
type Cell = {
	day: number,
	inMonth: boolean,
	isCurrentDay: boolean,
	todos: Array<any>
}

const calendarStore = new writable([]);

export default calendarStore;