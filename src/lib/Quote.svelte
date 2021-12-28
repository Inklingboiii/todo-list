<script>
    // Fetch quote
    const api_url = 'https://zenquotes.io/api/quotes/';
    let quotes = [];

    async function getQuotes(url) {
        const result = await fetch(url, {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        });
        const data = await result.json();
        console.log(JSON.parse(JSON.stringify(data)))
        return data;
    }

    quotes = getQuotes(api_url);
    console.log(quotes)
</script>

{quotes[0].h}