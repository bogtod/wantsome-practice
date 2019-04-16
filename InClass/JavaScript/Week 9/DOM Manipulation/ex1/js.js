//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda


const byId = document.getElementById('test')
const byClass = document.getElementsByClassName('test')
const byTag = document.getElementsByTagName('section')
const querySel = document.querySelector('#test-query')
const querySelAll = document.querySelectorAll('.test-query-all')

byId.style.backgroundColor = 'green'

for(let i = 0; i < byClass.length; i++) {
    byClass[i].style.backgroundColor = 'red'
}

for(let i = 0; i < byTag.length; i++) {
    byTag[i].style.backgroundColor = 'blue'
}

querySel.style.backgroundColor = 'orange'


for(let i = 0; i < querySelAll.length; i++) {
    querySelAll[i].style.backgroundColor = 'brown'
    querySelAll[i].style.backgroundColor = 'brown'
}




