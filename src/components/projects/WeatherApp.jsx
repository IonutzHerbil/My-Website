import React, { useState } from 'react';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'e8058b936dc091d05d3d8cb7fbe373f8';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async () => {
    if (!location.trim()) return;
    setLoading(true);
    try {
      const resp = await fetch(`${API_URL}?q=${encodeURIComponent(location)}&appid=${API_KEY}&units=metric`);
      if (!resp.ok) throw new Error('Weather data not found');
      const data = await resp.json();
      setWeatherData({
        name: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description
      });
      setError(null);
    } catch (e) {
      setError('Could not fetch weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => { if (e.key === 'Enter') fetchWeather(); };

  return (
    <div className="weather-app">
      <div className="search-container">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Enter city name"
          aria-label="City name"
        />
        <button onClick={fetchWeather} disabled={loading}>{loading ? '...' : 'Search'}</button>
      </div>

      {error && <div className="error">{error}</div>}

      {loading && (
        <div className="weather-loading">
          <div className="loading-spinner"></div>
          <p>Loading weather data...</p>
        </div>
      )}

      {weatherData && !loading && (
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
