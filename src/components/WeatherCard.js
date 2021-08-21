import React from "react";
import styled from "styled-components";

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

const WeatherCard = () => {
  return (
    <div>
      WeatherCard
      <StyledTime className="time">Aug 21, 14:26</StyledTime>
      <StyledLocation className="location">Chicago, US</StyledLocation>
      <StyledTemperature className="temperature">
        <div>
          <img alt="icon" src="http://openweathermap.org/img/wn/04d.png"></img>
        </div>
        <StyledTempText>
          <span className="temp-text">30°C</span>
        </StyledTempText>
      </StyledTemperature>
      <div>
        <p>
          <strong className="temp-feel">Feels like 33°C. Clouds</strong>
        </p>
      </div>
      <StyledTempDetails className="temp-details">
        <div>Wind: 0.45 m/s</div>
        <div>Humidity: 57%</div>
      </StyledTempDetails>
    </div>
  );
};

export default WeatherCard;
