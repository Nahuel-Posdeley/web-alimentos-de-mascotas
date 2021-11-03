let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector(".navbar")

menuBtn.addEventListener("click",() =>{
    navBar.classList.toggle('active');
})

let loginForm = document.querySelector('.login-form');
let menuLogin = document.querySelector("#login-btn")
menuLogin.addEventListener("click",() =>{
    loginForm.classList.toggle('active');
})



window.onscroll = () =>{
    loginForm.classList.remove('active');
    navBar.classList.remove('active');

}