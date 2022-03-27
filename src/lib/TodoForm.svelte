<script>
	import FloatingInput from '$lib/utilities/FloatingInput.svelte';
	let today = true

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
		<input type="datetime-local" min={new Date().toISOString().slice(0, 16)}>
	{:else}
		<input type="datetime-local" min={new Date().toISOString().slice(0, 16)}>
	{/if}

	<button>Save</button>
</form>