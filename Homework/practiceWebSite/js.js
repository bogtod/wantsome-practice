// JS for the scroll up button
function toggleGoUp() {
    var goUpBtn = document.getElementById('goUpBtn');
    if(window.scrollY > 100) {
        goUpBtn.style = ("display: block;");
    } else {
        goUpBtn.style = ("display: none;");
    }
};

function goUp() {
    window.scroll = 0;
}


//JS for bottom scroll tooltip
function bottomTooltip() {
    var scrollFind = window.innerHeight + window.pageYOffset;
    var docHeight = document.body.clientHeight;
    var tooltip = document.getElementById("tooltip");

    if(scrollFind == docHeight) {
        tooltip.style = "display: block;";
        console.log("You reached the bottom of the page!");
    } else {
        tooltip.style = "display: none;";
    }
}


// having the above functions run when the user scrolls
window.onscroll = function() {
    toggleGoUp();
    bottomTooltip();
};






