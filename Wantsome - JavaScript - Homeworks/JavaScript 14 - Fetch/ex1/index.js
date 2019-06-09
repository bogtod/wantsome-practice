// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json


import { apiRequest } from './fetch.js';

apiRequest().then(res => {return biggerThanFive(res)});
apiRequest().then(res => {return getNameCity(res)});

const biggerThanFive = arr => {
    console.log(arr.filter(usr => usr.id > 5));
};

const getNameCity = arr => {
    let newArr = [];
    arr.map(usr => {
        let user = new Object();
        user.name = usr.name;
        user.city = usr.address.city;
        newArr.push(user);
    });
    console.log(newArr);
};


