<script>
	import { addTodo } from '$lib/todosStores.ts';
	import { nanoid as uuid } from 'nanoid'
	import FloatingInput from '$lib/utilities/FloatingInput.svelte';
	import Button from '$lib/utilities/Button.svelte';
	let today = true
	let text;
	let deadline;
	let min = formatDate(new Date());
	let max = null;
	$: {
		if(today) {
			max = new Date();
			max.setDate(new Date().getDate() + 1)
			max.setHours(0, 0, 0);
			max = formatDate(max);
		} else {
			max = null;
		}
	}

	function formatDate(d) {
		let date = d;
		// Add offset, since it gets converted into UTC when converted into ISO string 
		date.setMinutes(-date.getTimezoneOffset() + date.getMinutes())
		return date.toISOString().slice(0, 16);
	}

	function handleSubmit() {
		console.log('b', new Date(deadline));
		let todo = {
			text,
			today,
			deadline: new Date(deadline).getTime(),
			id: uuid()
		}
		addTodo(todo);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<FloatingInput bind:text data={{name: 'name', labelText: 'Name', required: true, value: text}} />
	<fieldset>
		<legend>Time span</legend>
		<label>
		For Today
		<input type="radio" name="timespan" value={true} bind:group={today} checked>
		</label>
		<label>
		Long term
		<input type="radio" name="timespan" value={false} bind:group={today}>
		</label>
	</fieldset>
	<input bind:value={deadline} type="datetime-local" {min} {max} required>

	<Button>Save</Button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		min-height: 50vh;
		background-color: var(--color-gray);
		padding: 1em 2em;
		/* Makes it so nothing goes behind it; fixes issue with button */
		isolation: isolate;
	}
</style>