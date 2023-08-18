const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelectorAll('.fa-eye');
const requirementList = document.querySelectorAll('.list');
const passwordConfirm = document.querySelector('.pass-field-confirm input'); 
const wrongPassword = document.querySelector('.wrong-input')






//for the password requirements
const requirements =[
    { regex: /.{8,}/, index: 0},
    { regex: /[0-9]/, index: 1},
    { regex: /[a-z]/, index: 2},
    { regex: /[^A-Za-z0-9]/,index: 3},
    { regex: /[A-Z]/, index: 4},
]

passwordInput.addEventListener('keyup', function (e){
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        requirementItem.firstElementChild.className = isValid ? "fa-solid fa-check" : "fa-solid fa-circle";
        requirementItem.classList.add("valid");
        requirementItem.classList.remove("valid");

    })
});


//to check if the input password corresponds
passwordConfirm.addEventListener('keyup', function(){
    if(passwordInput.value!== passwordConfirm.value){
        wrongPassword.style.display = 'flex';
    }
    else {
        wrongPassword.style.display = 'none';
  
    }
});




//eyeicon with slashes
 eyeIcon.forEach(function (eyeIcon) {
    eyeIcon.addEventListener('click', function () {
      passwordInput.type = passwordInput.type === 'password'? 'text' : 'password';
      passwordConfirm.type = passwordConfirm.type === 'password'? 'text' : 'password';

     eyeIcon.className = `fa-solid fa-eye${passwordInput.type === 'password'? "" : "-slash"} ${passwordConfirm.type === 'password'? "" : "-slash"}`;
    });
 });




//saving the user input in my session storage

const btn = document.querySelector('#btn');
const password = document.querySelector('#password');

btn.addEventListener("click", function() {
  sessionStorage.setItem('password', password.value);
});



