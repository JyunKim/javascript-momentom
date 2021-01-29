const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.textContent = `${hours < 10 ? `0{hours}` : hours}:${
    minutes < 10 ? `0{minutes}` : minutes
  }:${seconds < 10 ? `0{seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000); // 1초마다 함수 실행
}

init();
