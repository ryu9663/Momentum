const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector('input');

const greeting = document.getElementById("greeting");

const savedUsername = localStorage.getItem('username');



function onLoginSubmit(event){
    event.preventDefault();

    const username = loginInput.value;

    localStorage.setItem('username',username);

    loginForm.classList.add("hidden");

    
    
    writeGreetings(username)


}

function writeGreetings(username){
    greeting.innerText = (`안녕하세요 ${username}`);

    greeting.classList.remove("hidden");
}


if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);

}else {

    writeGreetings(savedUsername)

}