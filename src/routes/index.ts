const cache = {
    data: null,
    time: new Date().getTime()
};
const timeout = 1000 * 60 * 60 * 5;
export async function get() {
    if(cache.time + timeout < new Date().getTime() || cache.data !== null) return {
        body: {
            quotes: cache.data
        }
    }
    console.log('new data fetch')
    const api_url = 'https://zenquotes.io/api/quotes/';
    const result = await fetch(api_url);
    if(result.ok) {
        const quotes = await result.json();
        cache.data = quotes
        
        cache.time = new Date().getTime();
        return {
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