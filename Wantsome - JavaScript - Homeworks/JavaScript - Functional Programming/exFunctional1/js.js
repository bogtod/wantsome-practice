//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function(string){
    let arrString = string.split('');
    return arrString.map((letter, index) => { return String.fromCharCode(string.charCodeAt(index) + 1) }).join('')
};
  
// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function(string) {
    string = string.split(' ');
    return string.map((word, index) => { 
        if(index%2 === 0) { 
            return word.toUpperCase() 
        }; 
        return word.toLowerCase() 
    }).join(' ');
};

