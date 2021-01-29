const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER = 'currentUser';
const SHOWING = 'showing';

function handleSubmit(event) {
  event.preventDefault(); // 이벤트의 기본 동작 제거
  const currentValue = input.value;
  showGreeting(currentValue);
  localStorage.setItem(USER, currentValue);
}

function askName() {
  form.classList.add(SHOWING);
  form.addEventListener('submit', handleSubmit);
}

function showGreeting(user) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.textContent = `Hello ${user}`;
}

function checkName() {
  const currentUser = localStorage.getItem(USER); // 브라우저 Application에 저장
  if (currentUser === null) {
    askName();
  } else {
    showGreeting(currentUser);
  }
}

function init() {
  checkName();
}

init();
