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
function alert(status, location, text) {
    if(status === 'on') {
        if(location.parentElement.querySelector('.alert')) {
            location.parentElement.querySelector('.alert').remove();
        }
        let alert = document.createElement('p');
        alert.innerHTML = text;
        alert.classList.add('alert');
        location.insertAdjacentElement('beforebegin', alert);
        toggleBtn('off');
    } else if(status === 'off') {
        if(location.parentElement.querySelector('.alert')) {
            location.parentElement.querySelector('.alert').remove();
        }
        toggleBtn('on')
    }
}


// Functions for checking the inputs
function checkUsername() {
    if(username.value.length > 0) {
        alert('off', username);
        return true;
    } else {
        alert('on', username, 'Please insert an username');
        toggleBtn('off');
        username.onkeyup = checkUsername;
    }
}


function checkEmail() {
    if(email.value.search('@') !== -1) {
        alert('off', email);
        return true;
    } else {
        alert('on', email, 'Please enter a valid email address!');
        toggleBtn('off');
        email.onkeyup = checkEmail;
    }
}


function checkFirstName() {
    if(firstName.value.length > 0) {
        alert('off', firstName);
        return true;
    } else {
        alert('on', firstName, 'Please insert a first name');
        toggleBtn('off');
        firstName.onkeyup = checkFirstName;
    }
}


function checkLastName() {
    if(lastName.value.length > 0) {
        alert('off', lastName);
        return true;
    } else {
        alert('on', lastName, 'Please insert a last name');
        toggleBtn('off');
        lastName.onkeyup = checkLastName;
    }
}


function checkPhone() {
    if(phone.value.length > 0) {
        alert('off', phone);
        return true;
    } else {
        alert('on', phone, 'Please insert a last name');
        toggleBtn('off');
        phone.onkeyup = checkPhone;
    }
}


//function for checking if all the fields are good - used by the submit btn
function checkAll() {
    let funcs = [checkUsername(), checkEmail(), checkFirstName(), checkLastName(),checkPhone()]
    for(let i = 0; i < funcs.length; i++) {
        if(funcs[i] !== true) {
            toggleBtn('off');
            return;
        }
        toggleBtn('on');
    }
}

submitBtn.addEventListener('click', checkAll);











