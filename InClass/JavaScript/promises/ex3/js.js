const checkIfString = str => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof str === 'string') {
                resolve(str.toUpperCase());
            } else {
                reject(str)
            };
        }, 500);
    });
};

checkIfString('Ma numesc Bogdan').then(response => console.log(response));
checkIfString(5).catch(response => console.log(response));