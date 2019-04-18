const submitBtn = document.getElementById('submitBtn')



function insertAlert(text, location) {
    let alert = document.createElement('p');
    alert.innerHTML = text;
    alert.classList.add('alert');
    location.parentElement.appendChild(alert);
}


function checkUsername() {
    let username = document.getElementById('username');
    if(username.value <= 0) {
        insertAlert('Please enter an username', username)
    }
}


function checkEmail() {
    let email = document.getElementById('email');
    let alertMsg = 'Please enter a valid email address!'

    if(email.value.search('@') === -1) {
        insertAlert(alertMsg, email)
    }
}


function checkFirstName() {
    let firstName = document.getElementById('firstName');
    if(firstName.value <= 0) {
        insertAlert('Please enter an username', firstName)
    }
}


function checkLastName() {
    let lastName = document.getElementById('lastName');
    if(lastName.value <= 0) {
        insertAlert('Please enter an username', lastName)
    }
}



function checkPhone() {
    let phone = document.getElementById('phone');
    let phoneArr = phone.value.split('');

    for(let i = 0; i < phoneArr.length; i++) {
        if(Number(phoneArr[i]) === NaN) {
            insertAlert('Please enter a valid phone number', phone);
            return;
        }
    }
}



function catchAll() {
    checkUsername();
    checkEmail();
    checkFirstName();
    checkLastName();
    checkPhone();

}

submitBtn.addEventListener('click', catchAll)











