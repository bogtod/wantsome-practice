// setting variable for the output
var carOutput = document.getElementById('carOutput');

function carCountry() {
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
        car = car.trim();
        // setting the input to lowercase so that it doesn't become case sensitive
        car = car.toLowerCase();
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

        subCarOne = car.substring(0,1);
        subCarOne = subCarOne.toUpperCase();
        subCarTwo = car.substring(1);
        car = subCarOne + subCarTwo;

        if(country === 'unknown') {
            carOutput.innerHTML = `Marca <strong>${car}</strong> este necunoscută :(`
        } else {
            
            carOutput.innerHTML = `Marca <strong>${car}</strong> se produce in <strong>${country}</strong>`
        }
    }
}