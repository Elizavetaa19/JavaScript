import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Импортируем стили

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const API_KEY = '3c10c5f8195bdd1897bf02f2dc8c453a';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

    const fetchWeather = async (cityName) => {
        try {
            const response = await axios.get(`${API_URL}&q=${cityName}`);
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('Город не найден. Пожалуйста, проверьте название.');
            setWeatherData(null);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setWeatherData(null);
        setError('');
    };

    const cityCategories = {
        "Столицы": ["Moscow", "Paris", "London", "Berlin", "Tokyo", "Washington D.C.", "Madrid", "Rome", "Beijing", "Ottawa"],
        "Популярные города": ["New York", "Los Angeles", "Sydney", "Toronto", "Dubai", "Singapore", "Rio de Janeiro", "Barcelona", "Istanbul", "Bangkok"],
        "Туристические направления": ["Las Vegas", "Amsterdam", "Prague", "Hong Kong", "Venice", "Cairo", "Lisbon", "Buenos Aires", "Mumbai", "Cape Town"],
        "Прибрежные города": ["Miami", "Honolulu", "San Diego", "Copenhagen", "Nice", "Vancouver", "Rio de Janeiro", "Malibu"]
    };

    const filteredCities = selectedCategory ? cityCategories[selectedCategory] : [];

    return (
        <div className="weather-container">
            <h1>Погода</h1>
            <nav className="navigation">
                {Object.keys(cityCategories).map((category) => (
                    <button 
                        key={category} 
                        onClick={() => handleCategoryChange(category)}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <div className="city-cards">
                {filteredCities.length > 0 ? (
                    filteredCities.map((cityName) => (
                        <div 
                            className="city-card" 
                            key={cityName} 
                            onClick={() => fetchWeather(cityName)}
                        >
                            <h2>{cityName}</h2>
                        </div>
                    ))
                ) : (
                    <p>Пожалуйста, выберите категорию для отображения городов.</p>
                )}
            </div>

            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>Температура: {weatherData.main.temp} °C</p>
                    <p>Влажность: {weatherData.main.humidity} %</p>
                    <p>Состояние: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
