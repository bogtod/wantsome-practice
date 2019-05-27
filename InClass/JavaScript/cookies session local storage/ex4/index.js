function setCookie(cookieName,cookieValue,daysToExpire){
    let now = new Date();
    now = now.setHours(now.getHours() + daysToExpire*24);

    document.cookie = `${cookieName}=${cookieValue};expires=${new Date(now)}`;
};

function getCookie(cookieName){
    if(document.cookie === '') {
        return false;
    } else {
        return document.cookie.slice(document.cookie.indexOf(cookieName)+cookieName.length+1)
    };
};

function verifiyCookie(){
    if(getCookie('name') === false) {
        let name = prompt("What's your name?");
        if(name !== null) {
            setCookie('name', name, 1);
        };
    } else {
        alert(`Hello, ${getCookie('name')}`);
    };
};