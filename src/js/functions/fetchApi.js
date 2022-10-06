/**
 * Fetch Hacker News API
 * @param {string} endpoint The endpoint to fetch
 * @returns {Promise} The response from the server
 */
export async function fetchHkApi(endpoint) {
    const results = await fetch(`https://node-hnapi.herokuapp.com/${endpoint}`);
    const data = await results.json();
    return data;
}
