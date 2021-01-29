const greetingForm = document.querySelector('.js-greeting-form');
const greetingInput = greetingForm.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER = 'currentUser';
const SHOWING = 'showing';

function showGreeting(user) {
  greetingForm.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.textContent = `Hello ${user}`;
}

function handleSubmit(event) {
  event.preventDefault(); // 이벤트의 기본 동작 제거
  const currentValue = greetingInput.value;
  showGreeting(currentValue);
  localStorage.setItem(USER, currentValue);
}

function askName() {
  greetingForm.classList.add(SHOWING);
  greetingForm.addEventListener('submit', handleSubmit);
}

function getName() {
  const currentUser = localStorage.getItem(USER); // 브라우저 Application에 저장
  if (currentUser === null) {
    askName();
  } else {
    showGreeting(currentUser);
  }
}

function init() {
  getName();
}

init();
