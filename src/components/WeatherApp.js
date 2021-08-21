import React from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import HourlyForecast from "./HourlyForecast";
import EightDayForecast from "./EightDayForecast";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
`;

const WeatherApp = () => {
  return (
    <Container>
      <header>
        <h1>Weather App</h1>
      </header>
      <SearchBar />
      <br />
      <WeatherCard />
      <br />
      <HourlyForecast />
      <br />
      <EightDayForecast />
    </Container>
  );
};

export default WeatherApp;
