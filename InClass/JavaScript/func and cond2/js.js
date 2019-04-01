function iterateWithFor(valNum) {
    for(var i = 0; i < valNum; i++) {
        console.log('Sunt la iteratia ' + i);
    }
}

function iterateWithWhile(valNum) {
    while(i < valNum) {
        console.log('Sunt la iteratia ' + i);
        i++
    }
}


var studs = ['Bogdan', 'Ion', 'George', 'Cosmin'];


function throughArrayForIn(arr) {
    for(i in arr) {
        console.log(arr[i]);
    }
}

function throughArrayFor(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


var objToIterate = {
    'one': 'unu',
    'two': 'doi',
    'three': 'trei',
    'four': 'patru'
}

function throughObjForIn(obj) {
    for(i in objToIterate) {
        console.log(objToIterate[i]);
    }
}

function throughObjFor(obj) {
    var myArr = Object.keys(obj);
    for(var i = 0; i < myArr.length; i++) {
        console.log(obj[myArr[i]]);
    }
}


function forOne() {
    var text = '';
    for(var i = 0; i < 1001; i+=100) {
        text += i + ' ';
    }
    console.log(text);
}


function forTwo() {
    var text = '';
    for(var i = 1; i < 128; i*=2){
        text += i + ' ';
    }
    console.log(text);
}

function forThree() {
    var text = '';
    for(var i = 0; i < 11; i+=2) {
        text += i + ' ';
    }
    console.log(text);
}


function forFour() {
    var text = '';
    for(var i = 3; i < 16; i+=3) {
        text += i + ' ';
    }
    console.log(text);
}


function forFive() {
    var text = '';
    for(var i = 9; i > -1; i--) {
        text += i + ' ';
    }
    console.log(text);
}


function forSix() {
    var text = '';
    for(var i = 1; i < 5; i++) {
        text += i + ' ' + i + ' ' + i + ' ';
    }
    console.log(text)
}


function forSeven() {
    var text = '';
    for(var i = 0; i < 5; i++) {
        text += i + ' ';
    }

    var finalText = '';
    for(var x = 0; x < 3; x++) {
        finalText += text;
    }
    console.log(finalText);
}



















