<script>
	import { goto } from '$app/navigation';
	import { addTodo } from '$lib/todosStores.ts';
	import currentTime from '$lib/utilities/currentTimeStore';
	import FloatingInput from '$lib/utilities/FloatingInput.svelte';
	import Button from '$lib/utilities/Button.svelte';
	let today = true;
	let text;
	let deadline;
	$: min = formatDate(new Date($currentTime));
	let max = null;
	$: {
		if(today) {
			max = new Date($currentTime);
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
		let todo = {
			text,
			today,
			deadline: new Date(deadline).getTime(),
			id: crypto.randomUUID()
		}
		addTodo(todo);
		goto('/');
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<FloatingInput bind:text name='name' required>
	Name
	</FloatingInput>
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
	<label>
		Deadline
		<input bind:value={deadline} type="datetime-local" {min} {max} required>
	</label>

	<Button>Save</Button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
		gap: 1em;
		min-height: 50vh;
		background-color: var(--color-dark);
		color: white;
		box-shadow: var(--color-gray) 0px 0px 1em 0.5em;
		padding: 1em 2em;
		/* Makes it so nothing goes behind it; fixes issue with button */
		isolation: isolate;
	}
</style>