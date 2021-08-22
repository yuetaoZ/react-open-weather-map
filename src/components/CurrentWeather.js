import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";
import { getCurrentWeather } from "../api";
import { KelvinToCelsius } from "../utils";

const StyledTime = styled.div`
  color: rgb(235, 110, 75);
`;

const StyledLocation = styled.h4`
  font-size: 1.5rem;
  margin: 0.5rem 0px;
`;

const StyledTemperature = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTempText = styled.p`
  font-size: 2rem;
`;

const StyledTempDetails = styled.div`
  border-left: 1px solid rgb(235, 110, 75);
  padding-left: 1rem;
`;

const WeatherCard = ({ city }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!city) {
      return;
    }
    getCurrentWeather(city)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  }, [city]);

  return (
    data && (
      <div>
        <StyledTime>{moment.unix(data.dt).format("MMM D, h:mm")}</StyledTime>
        <StyledLocation>
          {data.name}, {data.sys.country}
        </StyledLocation>
        <StyledTemperature>
          <div>
            <img
              alt="icon"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            ></img>
          </div>
          <StyledTempText>
            <span>{Math.round(KelvinToCelsius(data.main.temp))}°C</span>
          </StyledTempText>
        </StyledTemperature>
        <div>
          <p>
            <strong className="temp-feel">
              Feels like {Math.round(KelvinToCelsius(data.main.feels_like))}°C.{" "}
              {data.weather[0].main}
            </strong>
          </p>
        </div>
        <StyledTempDetails className="temp-details">
          <div>Wind: {data.wind.speed} m/s</div>
          <div>Humidity: {data.main.humidity}%</div>
        </StyledTempDetails>
      </div>
    )
  );
};

export default WeatherCard;
