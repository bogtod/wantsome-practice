var greaterNumber = function (a, b) {
    if (a > b) {
        return "Numarul mai mare dintre " + a + " si " + b + " este " + a;
    } else if (a < b) {
        return "Numarul mai mare dintre " + a + " si " + b + " este " + b;
    } else {
        return "Numerele " + a + " si " + b + " sunt egale :("
    }
}



function resultFunc (x, y) {
    console.log("Calling the greaterNumber function...");
    return greaterNumber(x, y);
}



function helloWorldLang (lang) {
    var helloText;
    switch(lang) {
        case 'en':
            helloText = 'Hello World!';
            break;
        case 'es':
            helloText = 'Hola Mundo';
            break;
        case 'de':
            helloText = 'Hallo Welt';
            break;
        default:
            helloText = 'Hello World!';
    }

    return helloText;
}

var helloWorldLang2 = function(lang) {
    if(lang === 'en') {
        return 'Hello World!';
    } else if(lang === 'es') {
        return 'Hola Mundo';
    } else if(lang === 'de') {
        return 'Hallo Welt';
    } else {
        return 'please choose one of the languages: en, es, de';
    }
}


var objLanguage = function (lang) {
    var languagesforHW = {
        'en': 'Hello World!',
        'es': 'Hola Mundo',
        'de': 'Hallo Welt'
    }
    return languagesforHW[lang];
}

function name1() {
    console.log('Hello world');
}

function name2() {
    console.log('Hola mundo');
}

function name3() {
    console.log('Hallo Welt');
}

var objLanguage2 = function (lang) {
    var langHW = {
        'en': name1(),
        'es': name2(),
        'de': name3()
    }
    return langHW[lang]();
}


function pluralize (word, number) {
    
    if(word === 'goose') {
        var result = '';
        if(number === 1) {
            result = number + ' ' + word;
        } else {
            result = number + ' geese';
        }
        return result;
    } 
        
    
    if(number < 1) {
        return 'Please fill in a number larger than 0';
    } else if(number === 1) {
        return number + ' ' + word;
    } else if(number > 1) {
        return number + ' ' + word + 's';
    }    
}


function annualRev(venit) {
    venit = parseInt(venit);
    var taxa;

    switch(true) {
        case venit < 30000:
            taxa = 0;
            break;
        case venit > 30000 && venit < 99999:
            taxa = venit * 0.35;
            break;
        case venit > 100000:
            taxa = venit * 0.4;
    }

    return 'Pentru un venit anual de ' + venit + ' aveti de platit taxe in valoare de ' + taxa;
}



function isWeekend(date) {
    var parsedDate = new Date(date);
    var indexOfDay = parsedDate.getDay();
    
    return [5, 6].includes(indexOfDay);
}
