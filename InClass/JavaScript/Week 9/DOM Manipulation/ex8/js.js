const checkbox = document.getElementById('checkbox')



checkbox.onchange = function() {
    document.querySelector('textarea').classList.toggle('hide')
}



function checkText() {
    console.log(document.querySelector('textarea').value)
}


