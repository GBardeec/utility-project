const form = document.querySelector('.greetings-container__form');
const input = form.querySelector('input');
const greeting = document.querySelector('.greetings-container__text');

const user_ls = 'currentUserName';
const showing_cn = 'showing';

function saveUserName(text) {
    localStorage.setItem(user_ls, text);
}

function submitHandler(event) {
    event.preventDefault();
    const inputValue = input.value;
    showGreeting(inputValue);
    saveUserName(inputValue);
}

function showGreeting(text) {
    greeting.innerText = `Приветствую, ${text}`;
    greeting.classList.add(showing_cn);
    form.classList.remove(showing_cn);
}

function askForUserName() {
    form.classList.add(showing_cn);
    form.addEventListener('submit', submitHandler);
}

function loadUserName () {
    const currentUserName = localStorage.getItem(user_ls);
    if (currentUserName === null) {
        askForUserName();
    } else {
        showGreeting(currentUserName);
    }
}

function init() {
    loadUserName();
}

init()