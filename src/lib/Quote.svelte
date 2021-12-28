<script context="module">
    // Fetch quote
    /** @type {import('@sveltejs/kit').Load} */
    export async function loadQuotes({fetch}) {
        const api_url = 'https://zenquotes.io/api/quotes/';
        const result = await fetch(api_url);

        if(result.ok) {
            return {
                props: {
                    quotes: await result.json()
                }
            }
        }

        return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
    }
</script>
<script>
    export let quotes;
</script>

{@html quotes[0].h}