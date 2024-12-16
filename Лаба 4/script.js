const apiKey = '3c10c5f8195bdd1897bf02f2dc8c453a'; // Ваш API-ключ
const city = 'London'; // Город установлен на Лондон

// Функция для загрузки текущей погоды
function loadCurrentWeather() {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#weatherTable tbody');
            tableBody.innerHTML = ''; // Очистить предыдущие данные

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.main.temp} °C</td>
                <td>${data.weather[0].description}</td>
                <td>${new Date(data.dt * 1000).toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        })
        .catch(error => console.error('Ошибка:', error));
}

// Функция для загрузки прогноза погоды
function loadForecast() {
    const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#weatherTable tbody');
            tableBody.innerHTML = ''; // Очистить предыдущие данные

            data.list.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.city.name}</td>
                    <td>${item.main.temp} °C</td>
                    <td>${item.weather[0].description}</td>
                    <td>${new Date(item.dt * 1000).toLocaleString()}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Ошибка:', error));
}

// Обработчики событий для кнопок
document.getElementById('loadCurrentWeather').addEventListener('click', loadCurrentWeather);
document.getElementById('loadForecast').addEventListener('click', loadForecast);
