// Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject


const capitalizeWords = arr => {
    return new Promise((resolve, reject) => {
        if(arr.filter((str) => { return typeof str !== 'string' }).length === 0) {
            resolve(arr.map((word) => { return word[0].toUpperCase() + word.slice(1, word.length) }));
        } else {
            reject('ERROR');
        };
    });
};

const sortWords = array => {
    const orderedWords = new Promise((resolve, reject) => {
        const orderedWords = array.sort();
        resolve(orderedWords);
    });
    return orderedWords;
};

let onlyWords = ['bogdan', 'banca', 'masina'];
let combined = ['bogdan', 5, true];

capitalizeWords(onlyWords).then(sortWords).then(response => console.log(response))



