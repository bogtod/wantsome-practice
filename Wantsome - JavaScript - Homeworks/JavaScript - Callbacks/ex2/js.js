//iterati peste toate butoanele si pentru fiecare in parte adaugati un eventListener pentru click si o functie callback care sa printeze in consola "button clicked!"

const buttons = document.getElementById('app').children;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', btnCallback);
}


function btnCallback() {
    console.log(`Button clicked!`);
}

