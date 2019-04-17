const commentWrap = document.getElementById('commentWrap')
const checkbox = document.getElementById('checkbox')
const commentOutput = document.getElementById('commentOutput')
const commArea = document.getElementById('userComment')
const charCount = document.getElementById('charCount')
const congratsMsg = document.getElementById('successMsg')
const outputWrap = document.getElementById('commOutputWrap')
const alert = document.getElementById('alert')
const btn = document.getElementById('btn')


checkbox.onchange = function hideShow() {
    if(checkbox.checked === true) {
        commentWrap.style.display = 'flex'
        congratsMsg.style.display = 'none'
        commArea.value = ''
        commArea.focus();
    } else {
        commentWrap.style.display = 'none'
    }
}

commArea.onfocus = function() {
    commArea.onkeyup = function() {
        charCount.innerHTML = commArea.value.split('').length
        if(commArea.value.split('').length > 160) {
            alert.style.display = 'block'
            btn.disabled = true
        } else {
            alert.style.display = 'none'
            btn.disabled = false
        }
    }
}


function checkText() {
    if(commArea.value.split('').length > 160) {
        
    } else {
        commentWrap.style.display = 'none'
        checkbox.checked = false
        congratsMsg.style.display = 'block'
        outputWrap.style.display = 'block'
        commentOutput.innerHTML = commArea.value
    }
}


