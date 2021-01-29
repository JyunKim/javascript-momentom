const body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
};

const a = {
  setColor: function (color) {
    tags = document.querySelectorAll('a');
    for (let i = 0; i < tags.length; i++) {
      tags[i].style.color = color;
    }
  },
};

function nightDayMode(self) {
  if (self.value === 'night') {
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day'; // 여기서 this를 쓰면 전역객체(windows)를 가리킴
    a.setColor('powderblue');
  } else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';
    a.setColor('blue');
  }
}

function handleClick(self) {
  const hasClass = self.classList.contains('clicked');
  if (hasClass) {
    self.classList.remove('clicked');
  } else {
    self.classList.add('clicked');
  }
}

// console.dir()로 속성 확인 가능

const num = document.getElementById('number');
const button = document.getElementById('night_day');
button.onclick = function () {
  nightDayMode(this);
  const cur = parseInt(num.textContent, 10);
  num.innerText = cur + 1;
};
// button.addEventListener('click', nightDayMode); 함수에 () 쓰면 바로 호출됨

const open = document.getElementById('open');
const close = document.querySelector('.close-wrapper');
const modal = document.querySelector('.modal-wrapper');
open.onclick = () => {
  modal.style.display = 'flex';
};
close.onclick = () => {
  modal.style.display = 'none';
};

const main = document.getElementById('main');
main.onclick = () => {
  handleClick(main);
};
