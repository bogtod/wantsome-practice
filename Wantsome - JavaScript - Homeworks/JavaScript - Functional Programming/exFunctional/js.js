// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    {name:'sasha', sex:'f', age:7, species:'cat'},
    {name:'john', sex:'m', age:133, species:'human'},
    {name:'titus', sex:'m', age:62, species:'human'},
    {name: 'kalifa', sex:'f', age:255, species:'human'},
    {name: 'oreo', sex:'m', age:21, species:'cat'},
];
    
let allCats = arr => { return arr.filter((item) => { return item.species === 'cat' }) }

let allHumans = arr => { return arr.filter((item) => { return item.species === 'human' }) }

let allFemales = arr => { return arr.filter((item) => { return item.sex === 'f' }) }

let totalOfAllAges = arr => { return arr.reduce((acc, item) => { return acc + item.age }, 0) }

let averageAgeOfCats = arr => { 
    let cats = allCats(arr)
    let sum = cats.reduce((acc, val) => { return acc + val.age }, 0 );
    return sum/cats.length;
};

let averageAgeOfHumans = arr => { 
    let humans = allHumans(arr)
    let sum = humans.reduce((acc, val) => { return acc + val.age }, 0 );
    return sum/humans.length;
};


let avgLengthOfNames = arr => {
    return arr.map((item) => { return item.name.length }).reduce((acc, val) => { return acc + val }, 0)/arr.length
};

