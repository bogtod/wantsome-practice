const section = document.querySelector('section');

const requestUrl = 'json.json';

const ajaxRequest = function() {
    const request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const colors = request.response;
        console.log(colors);
        showColors(colors);
    };
}

ajaxRequest();

function showColors(jsonObj) {
    const myList = document.createElement('ul');
    const colorsKeys = Object.keys(jsonObj);
    console.log()

    for(let i = 0; i < colorsKeys.length; i++) {
        const listItem = document.createElement('li');
        const spanColor = document.createElement('span');
        const spanText = document.createElement('span');
        spanText.textContent = jsonObj[Object.keys[i]];
        

        listItem.innerHTML = `${colorsKeys[i]}`

        listItem.appendChild(spanText)
        myList.appendChild(listItem);
        section.appendChild(myList);
    }
}













