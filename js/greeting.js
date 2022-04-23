const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

/*const link = document.querySelector("a");*/
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info){
 info.preventDefault();
 console.log(info);
loginForm.classList.add(HIDDEN_CLASSNAME);
const username = loginInput.value;
console.log(username);
localStorage.setItem(USERNAME_KEY, username);
paintGreeting(username);
}

function  paintGreeting(username){
  greeting.innerText = `Hello ${username}`;
 /* greeting.classList.remove(HIDDEN_CLASSNAME);*/
}

function handleLinkClick(info){
    info.preventDefault();
  console.log(info);
   console.dir(info);
   }
loginForm.addEventListener("submit", onLoginSubmit)
/*link.addEventListener("click", handleLinkClick)*/

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
/*loginForm.classList.remove(HIDDEN_CLASSNAME);*/
loginForm.addEventListener("submit",onLoginSubmit);
}
else{
  paintGreeting(savedUsername);
}