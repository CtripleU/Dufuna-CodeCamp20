let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let phoneNumber = document.getElementById('phonenumber');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('cpassword');
let signupbutton = document.getElementById('signupbutton');
const emailRegex = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /[^a-zA-Z]/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g;
const passwordRegex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/);

// to trigger the required error messages when the user clicks the signup button
signupbutton.addEventListener('click', () => {
    validateInput(email, "Please enter your Email Address", "Please enter a valid email", emailRegex);
    validateInput(firstName, "Please enter your First Name", "Please enter a valid first name", nameRegex);
    validateInput(lastName, "Please enter your Last Name", "Please enter a valid last name", nameRegex);
    validateInput(phoneNumber, "Please enter your Phone Number", "Please enter a valid phone number", phoneRegex);
    validateInput(password, "Please enter your Password", "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @ and 1 number", passwordRegex);
    validateInput(confirmPassword, "Please confirm your Password", "Your passwords don't match", passwordRegex);
});


// to print out individual error messages according to the specific text fields
validateInput = (element, emptyElementMessage, validationFailedMessage, validationRegex) => {
    if (element.value === "") {
        element.nextElementSibling.innerHTML = emptyElementMessage;
        return false;
    }
    if (element === phoneNumber || element === email || element === password) {
        if (!validationRegex.test(element.value)) {
            element.nextElementSibling.innerHTML = validationFailedMessage;
            return false;
        } else {
            element.nextElementSibling.innerHTML = "";
            return true;
        }
    } else if (element === confirmPassword) {
        if (confirmPassword.value !== password.value) {
            element.nextElementSibling.innerHTML = validationFailedMessage;
            return false;
        } else {
            element.nextElementSibling.innerHTML = "";
            return true;
        }
    }
    else {
        if (element === firstName || element === lastName) {
            if (validationRegex.test(element.value)) {
                element.nextElementSibling.innerHTML = validationFailedMessage;
                return false;
            } else {
                element.nextElementSibling.innerHTML = "";
                return true;
            }
        }
    }

}