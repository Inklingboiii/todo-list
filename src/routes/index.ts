export async function get() {
    const api_url = 'https://zenquotes.io/api/quotes/';
    const result = await fetch(api_url);
    const quotes = await result.json();
    if(result.ok) {
        return {
           headers: {
            'cache-control': 'public, max-age=86400'
           },
           body: {
               quotes
               }
        }
    }

    return {
        status: result.status,
        error: new Error(`Could not load ${api_url}`)
    };
}