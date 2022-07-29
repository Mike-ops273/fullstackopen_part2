//the purpose of this component is to provide weather data to App.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherData = ({ queryCountry }) => {
  const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [weatherIcon, setWeatherIcon] = useState();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const ICON_URL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  useEffect(() => {
    console.log("effect execute");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${queryCountry.capital}&appid=${API_KEY}&units=metric`;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setTemperature(data.main.temp);
        setWindSpeed(data.wind.speed);
        setWeatherIcon(data.weather[0].icon);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      {console.log("type of:", typeof queryCountry.capitalInfo)}
      {console.log("latitude:", queryCountry.capitalInfo.latlng[0])}
      {console.log("longitude:", queryCountry.capitalInfo.latlng[1])}
      <h2>Weather in {queryCountry.capital}</h2>
      <p>temperature: {temperature} Celsius</p>
      <img src={ICON_URL} alt="weather icon" />
      <p>wind speed: {windSpeed} m/s</p>
      {console.log()}
    </>
  );
};

export default WeatherData;

/*
Useful links:
API documentation https://openweathermap.org/api
*/
