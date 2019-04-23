
function getColors() {
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
            section.style.display = 'flex';
        };
    }

    ajaxRequest();

    function showColors(jsonObj) {
        const colorsKeys = Object.keys(jsonObj);
        const colorVals = Object.values(jsonObj);

        for(let i = 0; i < colorsKeys.length; i++) {
            //creating elements
            const wrapDiv = document.createElement('div');
            const colorDiv = document.createElement('div');
            const colorName = document.createElement('span');
            const hexName = document.createElement('span');

            //adding necessary classes
            colorDiv.classList.add('colorize');
            colorName.classList.add('colorName');
            hexName.classList.add('hexName');

            //adding text contents
            colorName.textContent = colorsKeys[i];
            hexName.textContent = colorVals[i];
            
            //styling
            wrapDiv.style.border = `1px solid ${colorVals[i]}`;
            colorDiv.style.backgroundColor = colorVals[i];

            //appending elements
            wrapDiv.appendChild(hexName);
            wrapDiv.appendChild(colorDiv);
            wrapDiv.appendChild(colorName);
            section.appendChild(wrapDiv);

            //showing and hiding a color's hex name on mouse over
            wrapDiv.onmouseover = function() {
                wrapDiv.children[0].style.display = 'inline-block';
            }
            wrapDiv.onmouseout = function() {
                wrapDiv.children[0].style.display = 'none';
            }
        }
    }
}
