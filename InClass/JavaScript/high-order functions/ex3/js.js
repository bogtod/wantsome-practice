function getPersonsNames(arr) {
    return arr.map((name) => { return `${name.name} ${name.surname}` });
};


console.log(getPersonsNames([
    {
    name: 'Angelina',
    surname: 'Jolie',
    age: 80
},
{
    name: 'Eric',
    surname: 'Jones',
    age: 90
}
]))