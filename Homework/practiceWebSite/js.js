// JS for the scroll up button
var goUp = document.getElementById('goUp');

window.onscroll = function() {toggleGoUp();};

function toggleGoUp() {
    if(window.scrollY > 100) {
        goUp.style = ("display: block;");
    } else {
        goUp.style = ("display: none;");
    }
};

