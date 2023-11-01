const inputEl = document.querySelector(".search-input");
const btnEl = document.querySelector(".search-btn");
const tempEl = document.querySelector(".temp");
const tempCityEl = document.querySelector(".temp-city");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

const API_KEY = "e641652cd378760758b5c8b407c15a31";

const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=`;

const checkWeather = async (city) => {
  const response = await fetch(`${API_URL}${city}`);
  const data = await response.json();
  tempCityEl.innerHTML = `${data.name}`;
  tempEl.innerHTML = `${Math.round(data.main.temp)}<small>°C</small>`;
  humidityEl.innerHTML = `Humidity ${data.main.humidity}%`;
  windEl.innerHTML = `Wind speed ${data.wind.speed} <small>km/h</small>`;
  document.querySelector(".country").innerHTML = `Country: ${data.sys.country}`;
};

btnEl.addEventListener("click", function (e) {
  e.preventDefault();

  checkWeather(inputEl.value);
});
