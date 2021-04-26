
export async function HttpRequest(url, params, verb) {

    try {
        const payload = {
            method: verb,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }
        if (verb != "GET") {
            payload.body = JSON.stringify(params);
        }
        let response = await fetch(url, payload)
        return response.json();

    } catch (err) {
        throw err;
    }
}
