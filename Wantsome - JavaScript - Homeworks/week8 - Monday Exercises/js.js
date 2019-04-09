
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - outpot 15 // myFunction(10,10) - output 100
function addOrMultiply(nrOne, nrTwo) {
    if(nrOne === nrTwo) {
        return (nrOne + nrTwo) * 5;
    }
    return nrOne + nrTwo
}


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false
function sumEqualThirty(nrOne, nrTwo) {
    if(nrOne === 30 && nrTwo === 30 || nrOne + nrTwo === 30) {return true}
    return false;
}



//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS
function addJS(theStr) {
    if(Boolean(theStr) === false) {
        return 'JS';
    } else if(typeof theStr !== 'string' || theStr.slice(0, 2) !== 'JS') {
        return `JS${theStr}`;
    }
    return theStr;
}



//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234
function removeDuplicates(value) {
    if(typeof value === 'number') {
        value = value.toString();
    } 
    valueArray = value.split('');
    
    return valueArray.filter(function(element, position) {
        return valueArray.indexOf(element) == position;
    }).join('')
    
}




//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
function findLongestString(theStr) {
    theStr = theStr.split(' ');
    var arrOfLengths = [];
    for(var i = 0; i < theStr.length; i++) {
        arrOfLengths.push(theStr[i].length);
    }
    return arrOfLengths.sort(function(a, b){return b-a})[0];
}



//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
function incrementStars() {
    var starArray = [];
    for(var i = 1; i < 6; i++) {
        console.log(starArray += '* ')
    }
}



//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] < 0) {
            negativeNumbers.push(numbers[i])
        }
    }
}
extractNegativeNumbers([1,2,-5,4,-6])


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
function calculate(nrOne, nrTwo, operation) {
    switch(true) {
        case operation === 'add':
            return nrOne + nrTwo
            break
        case operation === 'substract':
            return nrOne - nrTwo
            break
        case operation === 'multiply':
            return nrOne * nrTwo
            break
        case operation === 'divide':
            return nrOne / nrTwo
            break
        default:
            return 'Please insert a valid operation'
    }
}

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7
function isDiv(nr) {
    switch(true) {
        case nr % 3 === 0 && nr % 5 !== 0:
            return 'THREE'
            break
        case nr % 3 !== 0 && nr % 5 === 0:
            return 'FIVE'
            break
        case nr % 3 === 0 && nr % 5 === 0:
            return 'BOTH'
            break
        default:
            return nr;
    }
}



//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38
function dayAndHour() {
    var today = new Date();
    var dayNumber = today.getDay();
    var dayName;
    
    switch(true) {
        case dayNumber === 0:
            dayName = 'Duminică';
            break
        case dayNumber === 1:
            dayName = 'Luni';
            break
        case dayNumber === 2:
            dayName = 'Marți';
            break
        case dayNumber === 3:
            dayName = 'Miercuri';
            break
        case dayNumber === 4:
            dayName = 'Joi';
            break
        case dayNumber === 5:
            dayName = 'Vineri';
            break
        case dayNumber === 6:
            dayName = 'Sâmbătă';
            break
    }

    var amPm = 'AM'
    if(today.getHours() >= 12) {
        amPm = 'PM'
    }
    return `Azi este ${dayName}
    Ora este: ${today.getHours()}${amPm} : ${today.getMinutes()} : ${today.getSeconds()}`

}



//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false
function validPin(pin) {
    var pinArr = pin.split('')
    if(pinArr.length === 4 || pinArr.length === 6) {
        for(var i = 0; i < pinArr.length; i++) {
            if(isNaN(Number(pinArr[i]))) {
                return false;
            }
        }
        return true
    }
    return false
}


//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
function removeVowels(theStr) {
    return theStr.replace(/[aeiou]/ig,'')
}


//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false
function isSquareNumber(number) {
    for(var i = 1; i < number + 1; i++) {
        if(i * i === number) {
            return true
        }
    }
    return false
}


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
function isAnagram(str1, str2) {
    var str2Array = str2.split('');
    for(var i = 0; i < str2Array.length; i++) {
        if(str1.search(str2Array[i]) === -1) {
            return false
        }
    }
    return true
}




