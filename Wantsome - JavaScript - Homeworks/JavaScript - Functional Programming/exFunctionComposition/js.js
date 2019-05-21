//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza 
//valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului
const square = nr => { return nr * nr };
const double = nr => { return nr * 2 };

const composedValue = (func1, func2, val) => {
    return func1(func2(val));
};

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc
const compose = (func1, func2, val) => {
    return func1(func2(val));
};

const myFunction = val => {
    return compose(square, double, val);
};


//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul 
//si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5
const isOdd = arr => {
    return arr.filter((val) => { return val%2 !== 0 }).join(',')
};

const find = (array, func) => { return func(array) };


