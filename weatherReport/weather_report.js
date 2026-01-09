function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert('Please enter a city');
        return;
    }

    const apiKey = '8442b2eec273b7c6c585ffd4566acdf0';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('weatherInfo').innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML =
                `<p style="color:red">${error.message}</p>`;
        });
}

document.getElementById('weatherForm')
    .addEventListener('submit', showWeatherDetails);
