import React from 'react';

const WeatherList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name}: {item.weather}, Температура: {item.temperature}°C
        </li>
      ))}
    </ul>
  );
};

export default WeatherList;
