const form = document.querySelector(".js-greetingForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".greeting");

const USER_NAME = "name",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_NAME, text);
}

function paintToDos() {
    toDoList.classList.add(SHOWING_CN);
    list.classList.add(SHOWING_CN);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentUser = input.value;
    paintGreeting(currentUser);
    saveName(currentUser);
    paintToDos();
}


function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`;
    greeting.classList.add(SHOWING_CN)
}

function loadGreeting() {
    const userName = localStorage.getItem(USER_NAME);
    if(userName) {
        paintGreeting(userName);
    }
    else {
        askForName();
    }
}

function init() {
    loadGreeting();
}

init();