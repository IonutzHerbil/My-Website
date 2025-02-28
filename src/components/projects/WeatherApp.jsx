import React, { useState } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'e8058b936dc091d05d3d8cb7fbe373f8';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async () => {
    if (!location) return;

    try {
      const response = await fetch(`${API_URL}?q=${location}&appid=${API_KEY}&units=metric`);
      
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      
      const data = await response.json();
      setWeatherData({
        name: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description
      });
      setError(null);
    } catch (err) {
      setError('Could not fetch weather data');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-app">
      <div className="search-container">
        <input 
          type="text" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-display">
          <h2>{weatherData.name}</h2>
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="description">{weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;