//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function protectEmail(email) {
    var position = email.indexOf('@');
    var subOne = email.substring(0, 4);
    var subTwo = email.substring(position);

    return `${subOne}...${subTwo}`;
}



//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function firstToUpperCase(theStr) {
    var strArray = theStr.split(' ');

    var text = '';
    for(var i = 0; i < strArray.length; i++) {
        // text += `${strArray[i].charAt(0).toUpperCase()}${strArray[i].slice(1)} `
        text += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }

    return text;
}


//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
function toUpperAndBack(theStr) {
    var newStr = '';

    for(var i = 0; i < theStr.length; i++) {
        if(theStr[i] === theStr[i].toUpperCase()) {
            newStr += theStr[i].toLowerCase();
        } else {
            newStr += theStr[i].toUpperCase();
        }
    }

    return newStr;

}



//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
function concatString(theStr, times) {
    var result = '';
    var i = 0;
    while(i < times) {
        result += theStr;
        i++
    }
    return result;
}



//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function isPalindrome(theStr) {
    var revStr = theStr.split('').reverse();
    var revResult = '';
    for(var i = 0; i < revStr.length; i++) {
        revResult += revStr[i];
    }

    if(revResult === theStr) {
        return `Congrats! The word "${theStr}" is a palindrome`;
    } else {
        return `${theStr} is not a palindrome`;
    }

}

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
function biggestNumbers(arrayOfArrays) {
    var bigNumArray = [];

    function sortNumbers(a, b) {
        return b-a;
    }

    for(var i = 0; i < arrayOfArrays.length; i++){
        arrayOfArrays[i] = arrayOfArrays[i].sort(sortNumbers);
        bigNumArray.push(arrayOfArrays[i][0]);
    }

    return bigNumArray;
}



//Ex7
// Implementati o functie care face reverse la un string
function reverseString(theStr) {
    var revStr = theStr.split('').reverse();
    var revResult = '';

    for(var i = 0; i < revStr.length; i++) {
        revResult += revStr[i];
    }

    return `The word ${theStr} reversed is ${revResult}`
}

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar
function factorialOfNumber(number) {
    var result = 1;
    for(var i = 1; i < number; i++) {
        result *= i
    }

    return result;
}


//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function isSecondInFirst(str1, str2) {
    if(str1.slice(-str2.length) === str2) {
        return `The string ${str1} is ending in ${str2}`
    } else {
        return `The string ${str1} is not ending in ${str2}`
    }
}


//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care trece testul specificat
function isPalindrome2(theStr) {
    var revStr = theStr.split('').reverse();
    var revResult = '';
    for(var i = 0; i < revStr.length; i++) {
        revResult += revStr[i];
    }

    if(revResult === theStr) {return true} else {return false}
}


function firstPalindrome(arr) {
    for(var i = 0; i < arr.length; i++) {
        
        if(isPalindrome2(arr[i]) === true) {
            return `${arr[i]} is the first palindrome in the array`
        }
    }
}


//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea string
function hasSameLetters(str1, str2) {
    var str2Array = str2.split('');

    for(var i = 0; i < str2Array.length; i++) {
        if(str1.search(str2Array[i]) === -1) {
            return `Not all the letters of ${str2} can be found in ${str1}`
        }
    }

    return `All letters of ${str2} can be found in ${str1}`
}


// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea specificata
function stopArrayAt(arr, stopVal) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === stopVal) {
            console.log(`I'm stopping now...`)
            break;
        }
        console.log(arr[i])
    }
}


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
var testArr = [null, 2, 'Bogdan', undefined, 0];
var badArr = [false, null, 0, "", undefined, NaN];

function eliminateBadStuff(arr) {
    var badArr = [false, null, 0, "", undefined, NaN];
    var text = '';
    for(var i = 0; i < badArr.length; i++) {
        for(var x = 0; x < arr.length; i++) {
            if(badArr[i] !== arr[x]) {
                text += arr[x];
            }
        }
    }

    return text;
    
}

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function repeatString(theStr, times) {
    var result = '';
    var i = 0;
    while(i < times) {
        result += theStr;
        i++
    }
    return result;
}