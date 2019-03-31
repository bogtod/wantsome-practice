function getSex() {
    var cnpInput = document.getElementById('cnp').value;
    var cnpOutput = document.getElementById('cnpOutput');
    cnpOutput.style = 'display: block;';

    // checking if the input has the correct length
    if(cnpInput.length === 13) {
        cnpOutput.innerHTML = '';
        // getting the sex of the person based on the first number of the input
        if(Number(cnpInput[0]) === 1 || Number(cnpInput[0]) === 2) {
            cnpOutput.innerHTML = 'Persoana verificata este de sex <strong>Masculin</strong';
        } else if(Number(cnpInput[0]) === 2) {
            cnpOutput.innerHTML = 'Persoana verificata este de sex <strong>Feminin</strong';
        } else {
            cnpOutput.innerHTML = `
                <span class='alert'>
                    Prima cifra din CNP trebuie sa fie una din cifrele 1 sau 2.
                    <br>
                    Prima cifra din CNP-ul introdus de dumneavoastra este ${cnpInput[0]}
                </span>
            `
        }
    } else {
        cnpOutput.innerHTML = `
            <span class='alert'>
                Codul Numeric Personal are lungimea de 13 cifre.
                <br>
                Cel introdus de dumneavoastra are ${cnpInput.length} cifre
            </span>
        `
    }
}