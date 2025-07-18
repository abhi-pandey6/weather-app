const inputBox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const weather_img = document.querySelector(".sun-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  const api_key = "a59a14e4ad5b1db3208bdd4a721482c9";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const response = await fetch(url);
  const weather_data = await response.json();

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = weather_data.weather[0].description;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed} km/h`;

  const weatherMain = weather_data.weather[0].main.toLowerCase();
  const weatherDescription = weather_data.weather[0].description.toLowerCase();

  if (weatherDescription.includes("scattered clouds")) {
    weather_img.src =
      "https://png.pngtree.com/png-clipart/20230929/original/pngtree-sunny-bright-weather-png-image_13016266.png"; // scattered clouds image
  } else if (weatherDescription.includes("overcast clouds")) {
    weather_img.src =
      "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png"; // overcast image
  } else if (weatherDescription.includes("clear")) {
    weather_img.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  } else if (weatherDescription.includes("rain")) {
    weather_img.src = "https://cdn-icons-png.flaticon.com/512/3313/3313887.png";
  } else if (weatherDescription.includes("mist")) {
    weather_img.src = "https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
  } else if (weatherDescription.includes("snow")) {
    weather_img.src = "https://cdn-icons-png.flaticon.com/512/642/642102.png";
  } else {
    weather_img.src = "https://cdn-icons-png.flaticon.com/512/1146/1146869.png";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

searchbtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
