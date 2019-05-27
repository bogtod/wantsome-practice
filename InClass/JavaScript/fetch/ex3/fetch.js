const url = "https://jsonplaceholder.typicode.com/posts";



export const apiRequest = (thePost) => {
    const options = {
        method: "POST",
        body: JSON.stringify(thePost),
        headers: {'Content-Type': 'application/json'},
    };
    return fetch(url, options).then((res) => { return res.json() })
};

