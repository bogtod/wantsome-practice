//getting all the needed variables
const commentWrap = document.getElementById('commentWrap');
const checkbox = document.getElementById('checkbox');
const commArea = document.getElementById('userComment');
const charCount = document.getElementById('charCount');
const congratsMsg = document.getElementById('successMsg');
const alert = document.getElementById('alert');
const btn = document.getElementById('btn');



//onchange event set on the checkbox
checkbox.onchange = function() {
    if(checkbox.checked === true) {
        //if the box is checked, display the comment area and focus on it
        commentWrap.style.display = 'flex';
        commArea.focus();
    } else {
        //if the box is unchecked, hide the comment area (useful if the user toggles) and disable the submit button
        commentWrap.style.display = 'none';
        btn.disabled = true;
    }
}

//set onfocus event on the comment area
commArea.onfocus = function() {
    //set onkeyup event on focus area to check the content everytime the user types inside it
    commArea.onkeyup = function() {
        let count = commArea.value.split('').length;

        //particular cases if 0 chars or 1 character is typed
        if(count === 0) {
            //if the comment area is empty, also disable the submit button
            btn.disabled = true;
            charCount.textContent = `Your feedback form is empty`;
        } else if(count === 1) {
            //if the count of chars is 1, enable de button
            btn.disabled = false;
            charCount.textContent = `You entered ${count} character. ${160-count} to go`;
        } else if(count > 1) {
            //IFs and actions for different char counts
            charCount.textContent = `You entered ${count} characters. ${160-count} to go`;
            if(count > 150) {
                charCount.textContent = `You entered ${count} characters. ${160-count} to go. You should think about stopping now...`;
                charCount.style.backgroundColor = 'yellow';
                if(count > 160) {
                    //if char count is above 160, do the following
                    commArea.style.backgroundColor = 'red';
                    charCount.textContent = `You entered ${count} characters!!!`;
                    charCount.style.color = 'red';
                    alert.style.display = 'block';
                    btn.disabled = true;
                } else {
                    commArea.style.backgroundColor = 'white';
                    charCount.style.color = 'black';
                    alert.style.display = 'none';
                    btn.disabled = false;
                }
            } else {
                charCount.style.backgroundColor = 'white';
                commArea.style.backgroundColor = 'white';
                    charCount.style.color = 'black';
                    alert.style.display = 'none';
                    btn.disabled = false;
            }
        }
    }
}


//function for hitting the submit button
function sendFeedback() {
    document.querySelector('form').style.display = 'none';
    congratsMsg.style.display = 'block';
    var now  = new Date();

    //output the user's feedback along with the date and time
    let output = document.createElement('section');
    congratsMsg.insertAdjacentElement('afterend', output);
    output.style.width = '100%';
    output.innerHTML = `
        <h4>Your feedback:</h4>
        <hr>
        <div id='commentOutput'>
        <p><i>${commArea.value}</i></p>
        <hr>
        <small>Sent on <span>${now.toLocaleString("ro-RO")}</span></small>
        </div>
        
    `;
}


