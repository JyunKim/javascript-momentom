const weather = document.querySelector('.js-weather');

const COORDS = 'coordination';
const WEATHER_API_KEY = '4730e1c50e875caef6086a2685473b8c';

function getWeather(lat, lon) {
  // 해당 주소로 요청을 보내면 응답으로 정보 받음(Network에서 확인 가능)
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weather.textContent = `${place} ${temperature}°C`;
    });
}

function handleGeoSuccess(position) {
  // 위치 정보 수집 수락 시 position 객체 생성
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // key, value 이름이 같으면 축약 가능
  const coordsObj = {
    latitude,
    longitude,
  };
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't load geo location");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // 사용자 위치 정보 수집
}

function getCoords() {
  const coords = localStorage.getItem(COORDS);
  if (coords === null) {
    askCoords();
  } else {
    const parsedCoords = JSON.parse(coords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  getCoords();
}

init();

fetch;
