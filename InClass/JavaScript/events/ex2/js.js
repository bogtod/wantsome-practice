//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

const btn = document.getElementById('exButton')

btn.onclick = function postTheGossip() {
    const name = document.getElementById('name').value
    const adj = document.getElementById('adjective').value
    const randWord = document.getElementById('random-word').value

    let output = document.createElement('p')
    output.innerHTML = `${name} este innebunit dupa ${randWord} ${adj}`
    document.body.appendChild(output)
}




