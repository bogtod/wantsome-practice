const checkString = string => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(string.indexOf('promise') !== -1) {
                resolve(`CONGRATS!!! The string "${string}" contains the word "promise"`);
            } else{
                reject(`EROARE: The string "${string}" does not contain the work "Promise"`);
            };
        }, 1000);
    });
};


checkString('I promise that I will do my homework').then(response => console.log(response));

checkString('I promis that I will do my homework').catch(response => console.log(response));