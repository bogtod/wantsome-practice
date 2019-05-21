const isGreaterThanTen = nr => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nr > 10) {
                resolve('E mai mare decat 10');
            } else {
                reject('EROAREEEE!!!! E mai mic sau egal cu 10');
            };
        }, 1000);
    });
};

isGreaterThanTen(22).then(response => console.log(response));

isGreaterThanTen(3).catch(rejectedResponse => console.log(rejectedResponse));