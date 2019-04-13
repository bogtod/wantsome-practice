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







