import React from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
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
  return (
    <StyledWeatherApp>
      <StyledHeader>
        <h1>Weather App</h1>
      </StyledHeader>
      <SearchBar />
      <br />
      <WeatherCard />
      <br />
      <HourlyForecast />
      <br />
      <EightDayForecast />
    </StyledWeatherApp>
  );
};

export default WeatherApp;
