// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author
// url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

import { apiRequest } from "./fetch.js";


apiRequest().then(res => { return printBooks(res.items) });
apiRequest().then(res => { return hasMoreAuthors(res.items) });

const printBooks = arr => {
    console.log(arr.filter(book => { return book.volumeInfo.pageCount > 230 }));
};


const hasMoreAuthors = arr => {
    return arr.filter(book => {
        return book.volumeInfo.authors.length > 1
    }).map(book => {
        let h = document.createElement('h3');
        h.innerText = "Books that have more than one author";
        let p = document.createElement('p');
        p.innerHTML = `Title: <strong>${book.volumeInfo.title}</strong> | Authors: <strong>${book.volumeInfo.authors.join(', ')}</strong>`;
        document.body.appendChild(h);
        document.body.appendChild(p);
    });
};