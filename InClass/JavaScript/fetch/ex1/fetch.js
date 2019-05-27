const url = "https://jsonplaceholder.typicode.com/users";

export const apiRequest = () => {
    return fetch(url).then(res => res.json());
};