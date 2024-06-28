document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('location-form');
    const weatherInfo = document.getElementById('weather-info');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const location = document.getElementById('location-input').value;
        const weatherData = await getWeatherData(location);
        displayWeather(weatherData);
    });

    async function getWeatherData(location) {
        const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
        const url = https//api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Location not found');
            return await response.json();
        } catch (error) {
            alert(error.message);
        }
    }

    function displayWeather(data) {
        if (!data) return;

        weatherInfo.innerHTML = `
            <div class="weather-data">Location: ${data.name}</div>
            <div class="weather-data">Temperature: ${data.main.temp} °C</div>
            <div class="weather-data">Weather: ${data.weather[0].description}</div>
            <div class="weather-data">Humidity: ${data.main.humidity} %</div>
            <div class="weather-data">Wind Speed: ${data.wind.speed} m/s</div>
        `;
        weatherInfo.style.display = 'block';
    }
});