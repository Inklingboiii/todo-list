<script context="module">
    // Fetch quote
    // TODO: Fetch multiple quotes at once and cache them externally as described here: https://premium.zenquotes.io/zenquotes-documentation/#call-quotes
    /** @type {import('@sveltejs/kit').Load} */
    export async function loadQuote({fetch}) {
        const api_url = 'https://zenquotes.io/api/random';
        const result = await fetch(api_url);
        const quotes = await result.json();

        if(result.ok) {
            return {
                props: {
                    quote: quotes[0]
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
    export let quote;
</script>

<figure>
    <blockquote>
        {quote.q}
    </blockquote>
    <figcaption>
        {quote.a}
    </figcaption>
</figure>