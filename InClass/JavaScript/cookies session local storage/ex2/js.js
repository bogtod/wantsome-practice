//Ex2. 
//Stocati in localStorage urmatoarele chei si valori 
//("width" "100px") ("height" "100px") ("background-color" "green")
//stocatile in 3 variabile diferite
// folositile pentru a construi un patrat cu ele


localStorage.setItem("width", "100px");
localStorage.setItem("height", "100px");
localStorage.setItem("background-color", "green");


function buildSquare() {
    const height = localStorage.getItem('height');
    const width = localStorage.getItem('width');
    const bgColor = localStorage.getItem('background-color');

    let div = document.createElement('div');

    div.style.width = width;
    div.style.height = height;
    div.style.backgroundColor = bgColor;

    document.body.appendChild(div);
};