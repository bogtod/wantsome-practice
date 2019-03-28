// 1. Scrieti o functie care verifica daca un input este sau nu de tip string.
function is_string(theString) {
    var result = typeof theString;
    return result === 'string';
}


// 2. Scrieti o functie care verifica daca un string este gol sau nu.
function is_blank(theString) {
    var result = theString.length;
    return result === 0;
}


// 3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:
function string_to_array(theString) {
    return theString.split(' ');
}


// 4. Scrieti o functie care transforma un string in forma abreviata:
function abbrev_name(theString) {
    // find the index of the space then go forward two positions
    var find = theString.indexOf(' ');
    find = find + 2;

    // slice the initial string from the beginning to the position of the space + 2
    var result = theString.slice(0, find);

    // return the result of the above and add a "."
    return result + '.';
}


// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):
function capitalize(theString) {
    // slice the first char in the string and capitalize it
    var firstChar = theString.slice(0, 1);
    firstChar = firstChar.toUpperCase();

    // slice the rest of the chars in the initial string
    var restOfChar = theString.slice(1);

    // concatenate and return the above results
    return firstChar + restOfChar;
}


// 6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:
function truncate_string(theString, number) {
    return theString.slice(0, number);
}


// 7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:
function isUpperCaseAt(theString, letterNum) {
    // getting the char indicated by the number
    var theChar = theString.charAt(letterNum);

    // transforming the selected char to Upper Case
    var upperChar = theChar.toUpperCase();

    // checking if the initial char is the same as the previously turned to upper case char
    return theChar === upperChar;
}


// 8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
function insert(theString, word, position) {
    // slicing the string into two substrings based on the position passed as argument
    var substringOne = theString.slice(0, position);
    var substringTwo = theString.slice(position);
    
    // combining the two substrings with the word passed as argument
    return substringOne + word + substringTwo;
}


// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(theString, word) {
    // splitting the string into two substrings making it an array of two substrings
    var stringArray = theString.split(word);

    // concatenating the two substrings from the array
    return stringArray[0] + stringArray[1];
}


// 10. Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings(stringOne, stringTwo) {
    // getting both strings to lower case
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();

    // comparing the strings as lower case
    return stringOne === stringTwo;
}


// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:
function uncapitalize(theString) {
    // slice the first char in the string and uncapitalize it
    var firstChar = theString.slice(0, 1);
    firstChar = firstChar.toLowerCase();

    // slice the rest of the chars in the initial string
    var restOfChar = theString.slice(1);

    // concatenate and return the above results
    return firstChar + restOfChar;
}