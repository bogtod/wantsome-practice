// default params
// spread & rest

// nu se mai folosesc dar se pot intreba la interviu: call, bind & apply



//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumOfNums = nr => {
    let result = 0;
    for(let i = 1; i < nr; i++) {
        result += i;
    }
    return result;
}

const sumOfTen = () => sumOfNums(10)


/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const longestWord = theString => theString.split(' ').sort(function(a, b) {return b.length-a.length})[0]



/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = theString => theString.split('').reverse().join('')


/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
const nextLetter = theString => {
    let newStr= '';
    for(let i = 0; i < theString.length; i++) {
        if(theString[i] === 'z') {
            newStr+='a';
        } else {
            newStr += String.fromCharCode(theString.charCodeAt(i)+1)
        }
    }
    return newStr
}


/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const convertToTime = nr => `${Math.floor(nr/60)}:${nr%60}`

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const orderAlpha = theString => theString.split('').sort().join('')

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const hasPlus = theString => {
    theString = theString.split('')

    for(let i = 0; i < theString.length; i++) {
        
    }
}







