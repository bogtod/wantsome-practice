const url = "https://www.googleapis.com/books/v1/volumes?q=horror";

export const apiRequest = () => {
    return fetch(url).then(res => res.json());
};