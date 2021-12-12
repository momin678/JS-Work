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
// Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value === ''){
        showError(username, 'User-name is Requered');
    }else{
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, 'Email is Requered');
    }else{
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password, 'Password  is Requered');
    }else{
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2, 'Conformation password is Requered');
    }else{
        showSuccess(password2);
    }
});