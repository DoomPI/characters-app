export default function sendRequest(url: string | URL): Promise<string> {
    return fetch(url)
        .then((response) => response.text())
}