function getWeather() {
    const apiKey = '3902cf952305927b610694c838ee91ee';
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            const { main, weather } = data;

            if (main && weather) {
                const temperature = main.temp;
                const weatherDescription = weather[0].description;

                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${weatherDescription}</p>`;
            } else {
                weatherInfo.innerHTML = "Weather information not found!";
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
