
export function fetchData(url, data){
    let options = {}
    options.headers = new Headers({ 'Content-Type': 'application/json'})
    options.method = data.method;
    options.body = JSON.stringify(data.body);

    const request = new Request(url, options);
    return fetch(request);
}
