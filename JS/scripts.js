const apiKey = "23bdea8470a36b06eb4095dff1b2b804"; 
const citySelect = document.getElementById("citySelect");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherButton.addEventListener("click", function() {
  const selectedCity = citySelect.value;
        fetchWeatherData(selectedCity);
});

function fetchWeatherData(city) {
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const location = data.location.name;
      const temperature = data.current.temperature;
      const weatherDescription = data.current.weather_descriptions[0];
      const weather_icons = data.current.weather_icons;
      const wind_speed = data.current.wind_speed;

      weatherInfo.innerHTML = `<h3>Weather in ${location}</h3>
                                <p>Temperature: ${temperature}°C</p>
                                <p>Description: <img src= ${weather_icons} width="20" heigh="15" alt=${weatherDescription}>${weatherDescription}</p>
                                <p>Wind speed is ${wind_speed}</p>
                                `;
      })
        .catch(error => {
          console.error(error);
          weatherInfo.innerHTML = "Error fetching weather data.";
  });
}