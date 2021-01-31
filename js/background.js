const body = document.querySelector('body');

const IMG_NUM = 3;

function showImage(number) {
  const img = new Image(); // html img element
  img.src = `img/${number}.jpg`;
  img.className = 'background';
  body.prepend(img); // 자식 중 가장 앞에 추가
}

function init() {
  const num = Math.floor(Math.random() * IMG_NUM + 1);
  showImage(num);
}

init();
