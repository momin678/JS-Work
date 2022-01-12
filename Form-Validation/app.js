// DOM Selection
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// showError & showSuccess method
function showError(input, messege){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = messege;
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// email validation check
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid");
    }
}
// chekc required
function checkRequire(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}
// Check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}
function checkPassword(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}
// password match check
function passwordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password not match');
    }
}
// get input field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequire([username, email, password, password2]);
    checkLength(username, 4, 15);
    checkPassword(password, 6, 20);
    checkEmail(email);
    passwordMatch(password, password2);
});