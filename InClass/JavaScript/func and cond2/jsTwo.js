counter = 10;
conditionalFn = function() {
    counter--;
    return counter >= 0;
}

actionFn = function() {console.log('Vreau sa ies la tabla')};

function stream(cond, action) {
    
    while(cond()) {
        action();
    }    
}


var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumbers(arr) {
    var sum = 0;
    var i = 0;
    while(i < arr.length) {
        sum+=arr[i++];
    }
    console.log(sum);
}


