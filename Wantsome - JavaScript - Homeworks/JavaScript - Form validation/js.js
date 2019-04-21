const submitBtn = document.getElementById('submitBtn')

const username = document.getElementById('username');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');



//selecting the method of validation
document.getElementById('perInputMethod').onchange = function() {
    if(this.checked === true) {
        username.onblur = checkUsername;
        email.onblur = checkEmail;
        firstName.onblur = checkFirstName;
        lastName.onblur = checkLastName;
        phone.onblur = checkPhone;
    }
}


//function for disabling the Submit button
function toggleBtn(status) {
    if(status === 'on') {
        submitBtn.disabled = false;
    } else if (status === 'off') {
        submitBtn.disabled = true;
    }
}

//function for placing the alert
function insertAlert(text, location) {
    let alert = document.createElement('p');
    alert.innerHTML = text;
    alert.classList.add('alert');
    location.insertAdjacentElement('beforebegin', alert);
    toggleBtn('off');
}

//function for removing the alert
function removeAlert(location) {
    if(location.parentElement.querySelector('.alert')) {
        location.parentElement.querySelector('.alert').remove();
    }
}



// Functions for checking the inputs
function checkUsername() {
    if(username.value <= 0) {
        insertAlert('Please enter an username', username);
        return;
    }
    toggleBtn('on');
    removeAlert(username);
    return true;
}


function checkEmail() {
    let alertMsg = 'Please enter a valid email address!'
    if(email.value.search('@') === -1) {
        insertAlert(alertMsg, email);
        return;
    }
    toggleBtn('on');
    removeAlert(email);
    return true;
}


function checkFirstName() {
    if(firstName.value <= 0) {
        insertAlert('Please enter a first name', firstName);
        return;
    }
    toggleBtn('on');
    removeAlert(firstName);
    return true;
}


function checkLastName() {
    if(lastName.value <= 0) {
        insertAlert('Please enter a last name', lastName);
        return;
    }
    toggleBtn('on');
    removeAlert(lastName);
    return true;
}


function checkPhone() {
    let phoneArr = phone.value.split('');

    if(phoneArr.length <= 10) {
        insertAlert('Phone number must be at least 10 characters', phone);
        return;
    } else {
        for(let i = 0; i < phoneArr.length; i++) {
            if(Number(phoneArr[i]) === NaN) {
                console.log(`${phoneArr[i]} ${Number(phoneArr[i]) === NaN}`)
                insertAlert('Please enter a valid phone number', phone);
                return;
            }
        }
    }
    toggleBtn('on');
    removeAlert(phone);
    return true;
}



function checkAllAtSubmit() {
    let funcs = [checkUsername(), checkEmail(), checkFirstName(), checkLastName(),checkPhone()]
    for(let i = 0; i < funcs.length; i++) {
        if(funcs[i] !== true) {
            toggleBtn('off');
        }
    }
}

submitBtn.addEventListener('click', checkAllAtSubmit);











