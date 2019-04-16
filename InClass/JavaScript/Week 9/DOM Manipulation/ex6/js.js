// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

document.body.style.fontFamily = 'Arial, sans-serif'

const ul = document.querySelector('ul')

ul.children[0].firstElementChild.textContent = 'Bogdan'
ul.children[1].firstElementChild.textContent = 'apa cu lamaie'
ul.children[2].firstElementChild.textContent = 'Roman'



for(let i = 0; i < ul.children.length; i++) {
    ul.children[i].classList.add('listItem')
}

const newImg = document.createElement('img')
newImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png')
document.body.appendChild(newImg)









