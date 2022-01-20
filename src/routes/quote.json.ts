export async function get() {
    const api_url = 'https://zenquotes.io/api/random';
    const result = await fetch(api_url);
    const quotes = await result.json();
    if(result.ok) {
        return {
           body: quotes[0]
        }
    }

    return {
        status: result.status,
        error: new Error(`Could not load ${api_url}`)
    };
}