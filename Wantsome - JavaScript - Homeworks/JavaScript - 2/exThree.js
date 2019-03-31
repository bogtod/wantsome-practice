// setting variables
var carOutput = document.getElementById('carOutput');
var selectMethod = document.getElementById('selectMethod');
var methodBtn = document.getElementById('methodBtn');
var carBtn = document.getElementById('carBtn');



// JS for the form that allows the method used for getting the country by car brand
selectMethod.onchange = function() {selectFunc()};
var method;

function selectFunc() {
    switch(true) {
        case selectMethod.value === 'byFunc':
            carOutput.innerHTML = 'Se invocă o funcție care folosește <code><strong>switch</strong></code> pentru a trece prin fiecare caz'
            break;
        case selectMethod.value === 'byObj':
            carOutput.innerHTML = 'Se invocă o funcție ce trece printr-un <strong>Object</strong> care conține numele mărcilor și țările'
            break;
        case selectMethod.value === 'byFuncExpr':
            carOutput.innerHTML = 'Se invocă o funcție de tip <strong>expression function</strong> ce trece printr-un <strong>object</strong> cu date'
            break;
        default:
            carOutput.innerHTML = 'Opțiune invalidă'
    }
    method = selectMethod.value;
    
    if(method === 'byFunc') {
        carBtn.onclick = function() {carCountryFunc()};
    } else if(method === 'byObj') {
        carBtn.onclick = function() {carCountryFuncObj()};
    } else {
        carBtn.onclick = function() {carCountryFuncExpr()};
    }
}
selectFunc();

methodBtn.onclick = function() {
    document.getElementById('methodSelector').style = 'display: none;';
    document.getElementById('carForm').style = 'display: flex;';
    carOutput.innerHTML = '';
}





// first method with a function that uses switch
function carCountryFunc() {
    var car = document.getElementById('car');
    car = car.value;
    //check if there is something in the input
    if(car.length === 0) {
        carOutput.innerHTML = `
            <span class='alert'>
                Trebuie să introduceți o valoare!
            </span>
        `
    } else {
        // trim the input of any spaces around it
        car = car.trim();
        // setting the input to lowercase so that it doesn't become case sensitive
        car = car.toLowerCase();

        // setting the country variable and starting the switch
        var country;
        switch(true) {
            case car === 'audi':
                country = 'Germania'
                break;
            case car === 'seat':
                country = 'Spania'
                break;
            case car === 'bmw':
                country = 'Germania'
                break;
            case car === 'dacia':
                country = 'Romania'
                break;
            case car === 'toyota':
                country = 'Japonia'
                break;
            case car === 'mercedes':
                country = 'Germania'
                break;
            default:
                country = 'unknown'
        }

        // Capitalize the first letter in the input for a beautiful returning output
        subCarOne = car.substring(0,1);
        subCarOne = subCarOne.toUpperCase();
        subCarTwo = car.substring(1);
        carUpperCase = subCarOne + subCarTwo;

        // if for the returning output
        if(country === 'unknown') {
            carOutput.innerHTML = `Marca <strong>${car}</strong> este necunoscută :(`
        } else {
            carOutput.innerHTML = `Marca <strong>${carUpperCase}</strong> se produce in <strong>${country}</strong>`
        }
    }
}




// second method with a function that uses an object
var carCountryObj = {
    'audi': 'Germania',
    'seat': 'Spania',
    'bmw': 'Germania',
    'dacia': 'Romania',
    'toyota': 'Japonia',
    'mercedes': 'Germania'
}


function carCountryFuncObj() {
    var car = document.getElementById('car');
    car = car.value;

    //check if there is something in the input
    if(car.length === 0) {
        carOutput.innerHTML = `
            <span class='alert'>
                Trebuie să introduceți o valoare!
            </span>
        `
    } else {
        // trim the input of any spaces around it
        car = car.trim();
        // setting the input to lowercase so that it doesn't become case sensitive
        car = car.toLowerCase();

        // if for the returning output
        if(carCountryObj[car] === undefined) {
            carOutput.innerHTML = `Marca <strong>${car}</strong> este necunoscută :(`
        } else {
            //Capitalize the first letter in the car input
            subCarOne = car.substring(0,1);
            subCarOne = subCarOne.toUpperCase();
            subCarTwo = car.substring(1);
            carUpperCase = subCarOne + subCarTwo;

            carOutput.innerHTML = `Marca <strong>${carUpperCase}</strong> se produce in <strong>${carCountryObj[car]}</strong>`
        }
    }
}




// third method that uses an expression function
var carCountryFuncExpr = function() {
    var carCountryObj = {
        'audi': 'Germania',
        'seat': 'Spania',
        'bmw': 'Germania',
        'dacia': 'Romania',
        'toyota': 'Japonia',
        'mercedes': 'Germania'
    }

    var car = document.getElementById('car');
    car = car.value;

    //check if there is something in the input
    if(car.length === 0) {
        carOutput.innerHTML = `
            <span class='alert'>
                Trebuie să introduceți o valoare!
            </span>
        `
    } else {
        // trim the input of any spaces around it
        car = car.trim();
        // setting the input to lowercase so that it doesn't become case sensitive
        car = car.toLowerCase();

        // if for the returning output
        if(carCountryObj[car] === undefined) {
            carOutput.innerHTML = `Marca <strong>${car}</strong> este necunoscută :(`
        } else {
            //Capitalize the first letter in the car input
            subCarOne = car.substring(0,1);
            subCarOne = subCarOne.toUpperCase();
            subCarTwo = car.substring(1);
            carUpperCase = subCarOne + subCarTwo;

            carOutput.innerHTML = `Marca <strong>${carUpperCase}</strong> se produce in <strong>${carCountryObj[car]}</strong>`
        }
    }
}