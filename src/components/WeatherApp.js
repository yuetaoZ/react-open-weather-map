import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import EightDayForecast from "./EightDayForecast";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
`;

const StyledWeatherApp = styled.div`
  width: 600px;
`;

const WeatherApp = () => {
  const [city, setCity] = useState("Chicago");

  const handleSearchCity = (city) => {
    setCity(city);
  };

  return (
    <StyledWeatherApp>
      <StyledHeader>
        <h1>Weather App</h1>
      </StyledHeader>
      <SearchBar onSearch={handleSearchCity} />
      <br />
      <CurrentWeather city={city} />
      <br />
      <HourlyForecast city={city} />
      <br />
      <EightDayForecast city={city} />
    </StyledWeatherApp>
  );
};

export default WeatherApp;
