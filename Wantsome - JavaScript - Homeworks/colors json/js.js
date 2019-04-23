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
    const colorVals = Object.values(jsonObj);

    for(let i = 0; i < colorsKeys.length; i++) {
        const listItem = document.createElement('li');
        const colorDiv = document.createElement('div');
        const textSpan = document.createElement('span');

        colorDiv.classList.add('colorize');
        textSpan.textContent = colorsKeys[i];
        colorDiv.style.backgroundColor = colorVals[i];


        listItem.appendChild(colorDiv);
        listItem.appendChild(textSpan);
        myList.appendChild(listItem);
        section.appendChild(myList);
    }
}













