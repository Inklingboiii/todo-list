<script>
	import FloatingInput from '$lib/utilities/FloatingInput.svelte';
	let today = true
	let min = new Date();
	// Add offset, since it gets converted into UTC when converted into ISO string 
	min.setMinutes(-min.getTimezoneOffset() + min.getMinutes())
	min = min.toISOString().slice(0, 16);

</script>

<form>
	<FloatingInput data={{name: 'name', labelText: 'Name', required: true}} />
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
	{#if today}
		<input type="datetime-local" {min}>
	{:else}
		<input type="datetime-local" {min}>
	{/if}

	<button>Save</button>
</form>