//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log

document.cookie = "name=Bogdan Todireanu";
document.cookie = "profession=boss";
document.cookie = "age=27";

document.cookie = "anotherCookie=cookieValue; expires=Mon May 27 2019 22:29:02 GMT+0300";
document.cookie = "fifthCookie=cookieValue; expires=Mon May 27 2019 22:29:02 GMT+0300";


const cookies = document.cookie.split(";").map(item => { return console.log(item.trim()) });