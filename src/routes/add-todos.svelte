<script>
	import TodoForm from '$lib/TodoForm.svelte';
	import MainHeading from '$lib/utilities/MainHeading.svelte';
</script>

<svelte:head>
	<title>Add to-do</title>
</svelte:head>
<header>
	<MainHeading>Add to-do</MainHeading>
</header>
<main>
	<TodoForm />
</main>

<style>
	main {
		margin: auto;
		align-self: center;
	}
</style>
