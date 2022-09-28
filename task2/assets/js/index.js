"use strict"

const password = document.querySelector("#password");
const Cpassword = document.querySelector("#c-password");
const msg = document.querySelector(".pass-error");
const submitBtn = document.querySelector(".submit");


let clearError = function(){
    password.classList.remove("error");
    Cpassword.classList.remove("error");
    msg.style = "display: none";
};

let showError = function(){
    password.classList.add("error");
    Cpassword.classList.add("error");
    msg.style = "display: block";
};



let formSubmit = function(e){
    e.preventDefault();
    if(password.value.trim() == ""){
        msg.textContent = "* Password is required";
        showError();
    }else if(password.value != Cpassword.value){
        msg.textContent = "* Password do not match";
        showError();
    }else{
        clearError();
    }
};

password.addEventListener("focus", clearError);
Cpassword.addEventListener("focus", clearError);
submitBtn.addEventListener("click", formSubmit);