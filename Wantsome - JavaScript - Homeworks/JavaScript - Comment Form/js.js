const commentWrap = document.getElementById('commentWrap');
const checkbox = document.getElementById('checkbox');
const commArea = document.getElementById('userComment');
const charCount = document.getElementById('charCount');
const congratsMsg = document.getElementById('successMsg');
const alert = document.getElementById('alert');
const btn = document.getElementById('btn');
const commentOutputWrap = document.getElementById('commentOutputWrap');
const commentOutput = document.getElementById('commentOutput');




checkbox.onchange = function() {
    if(checkbox.checked === true) {
        commentWrap.style.display = 'flex';
        
    } else {
        commentWrap.style.display = 'none';
        btn.disabled = true;
    }
}


commArea.onfocus = function() {
    commArea.onkeyup = function() {
        let count = commArea.value.split('').length;
        if(count === 0) {
            btn.disabled = true;
            charCount.textContent = `Your feedback form is empty`;
        } else if(count === 1) {
            btn.disabled = false;
            charCount.textContent = `You entered ${count} character. ${160-count} to go`;
        } else if(count > 1) {
            charCount.textContent = `You entered ${count} characters. ${160-count} to go`;
            if(count >= 150) {
                charCount.textContent = `You entered ${count} characters. ${160-count} to go. You should thing about stopping now...`;
                charCount.style.backgroundColor = 'yellow';
                if(commArea.value.split('').length > 160) {
                    charCount.textContent = `You entered ${count} characters!!!`;
                    charCount.style.color = 'red';
                    alert.style.display = 'block'
                    btn.disabled = true
                } else {
                    charCount.style.color = 'black';
                    alert.style.display = 'none'
                    btn.disabled = false
                }
            } else {
                charCount.style.backgroundColor = 'white';
            }
        }
    }
}

function sendFeedback() {
    document.querySelector('form').style.display = 'none';
    congratsMsg.style.display = 'block';
    commentOutputWrap.style.display = 'block';
    var now  = new Date();
    commentOutput.innerHTML = `
        <p><i>${commArea.value}</i></p>
        <hr>
        <small>Sent on <span>${now.toLocaleString("ro-RO")}</span></small>
    `;
}


