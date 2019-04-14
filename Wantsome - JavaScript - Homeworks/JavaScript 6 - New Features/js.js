// Exercises from codewars.com

/* Ex1: Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.*/
function maskify(cc) {
    if(cc.length > 4) {
        let finalArr = [];
        for(let i = 0; i < cc.slice(0, cc.length - 4).length; i++){
            finalArr.push(String.fromCharCode(35))
        }
        return `${finalArr.join('')}${cc.slice(-4)}`
    }
    return cc
}


/*Ex2: Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer  */
function squareDigits(num) {
    let numArray = [];
    for(let i = 0; i < num.toString().length; i++) {
        numArray.push(Number(num.toString()[i]) * Number(num.toString()[i]))
    }
    return Number(numArray.join(''))
}



/* Ex3: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false   */
function validatePIN (pin) {
    //return true or false
    return (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
}




/* Ex4: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A" */
function getMiddle(s) {
    if(s.length % 2 === 0) {
        return `${s[s.length/2-1]}${s[s.length/2]}`
    } else {
        return `${s[Math.floor(s.length/2)]}`
    }
}




/* Ex5: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" */
function spinWords(theStr) {
    theStr = theStr.split(' ')
    let resultStr = [];
    for(let i = 0; i < theStr.length; i++) {
        if(theStr[i].length >= 5) {
            resultStr.push(theStr[i].split('').reverse().join(''))
        } else {
            resultStr.push(theStr[i])
        }
        
    }

    return resultStr.join(' ')
}




//////////// RESCRIERE EXERCITII DE LA TEMELE ANTERIOARE CU ES6 ////////////////////
////Ex1:
//ES5
function isPalindromeVTwo(theStr) {
    if(theStr.split('').reverse().join('') === theStr) {
        return `Congrats! The word '${theStr}' is a palindrome`;
    }
    return `The word '${theStr}' is not a palindrome :( `;
}

//ES6
const isPalindromeVTwoES6 = theStr => (theStr.split('').reverse().join('') === theStr)? `Congrats! The word '${theStr}' is a palindrome` : `The word '${theStr}' is not a palindrome :( `


////Ex2:
//ES5
function reverseString(theStr) {
    return `The word '${theStr}' reversed is '${theStr.split('').reverse().join('')}'`
}

//ES6
const reverseStringES6 = theStr => `The word '${theStr}' reversed is '${theStr.split('').reverse().join('')}'`


////Ex3:
//ES5
function biggestNumbers(arrayOfArrays) {
    var bigNumArray = [];
    for(var i = 0; i < arrayOfArrays.length; i++){
        bigNumArray.push(arrayOfArrays[i].sort(function (a, b) {return b-a;})[0]);
    }
    return bigNumArray;
}

//ES6
const biggestNumbersES6 = arrayOfArrays => {
    let bigNumArray = [];
    for(let array of arrayOfArrays) {
        bigNumArray.push(array.sort(function (a, b) {return b-a;})[0]);
    }
    return bigNumArray
}


////Ex4:
//ES5
function isPalindrome2(theStr) {
    if(theStr.split('').reverse().join('') === theStr) {return true}
}

function firstPalindrome(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(isPalindrome2(arr[i]) === true) {
            return `${arr[i]} is the first palindrome in the array`
        }
    }
    return `No palindromes found`
}

//ES6
const isPalindrome2ES6 = theStr => (theStr.split('').reverse().join('') === theStr)? true : false
const firstPalindromeES6 = arr => arr.filter(isPalindrome2)[0]


////Ex5:
//ES5
function repeatStringTwo(theStr, times) { return theStr.repeat(times) }

//ES6
const repeatStringTwoES6 = (theStr, times) => theStr.repeat(times)


