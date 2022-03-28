<script>
	import FloatingInput from '$lib/utilities/FloatingInput.svelte';
	let today = true
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
	<input type="datetime-local" {min} {max}>
	
	<button>Save</button>
</form>