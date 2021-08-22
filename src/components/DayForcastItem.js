import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { KelvinToCelsius } from "../utils";

const ItemContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;
  border-radius: 4pt;
`;

const Date = styled.div`
  width: 30%;
`;

const Rest = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
`;

const Desc = styled.span`
  color: rgb(138, 138, 138);
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 8px;
`;

const DetailsContainer = styled.div`
  padding: 16px 32px;
`;

const TempDetails = styled.div`
  border-left: 1px solid rgb(235, 110, 75);
  padding-left: 1rem;
`;

const TempTable = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
  vertical-align: middle;
`;

const Th = styled.th`
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
`;

const TdCell = styled.td`
  display: table-cell;
  vertical-align: inherit;
`;

const Td = styled.td`
  text-align: center;
`;

const DayForcastItem = (props) => {
  const [show, setShow] = useState(false);

  const forcast = props.forcast;
  return (
    <>
      <ItemContainer>
        <Date>{moment.unix(forcast.dt).format("dddd, MMM D")}</Date>
        <Rest>
          <Temperature>
            <img
              alt="icon"
              src={`http://openweathermap.org/img/wn/${forcast.weather[0].icon}.png`}
            ></img>
            <div>
              <span>{Math.round(KelvinToCelsius(forcast.temp.max))}°C / </span>
              <span>{Math.round(KelvinToCelsius(forcast.temp.min))}°C</span>
            </div>
          </Temperature>
          <div>
            <Desc>{forcast.weather[0].description}</Desc>
            <Button
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? "-" : "+"}
            </Button>
          </div>
        </Rest>
      </ItemContainer>
      {show && (
        <DetailsContainer>
          <TempDetails className="temp-details">
            <div>
              <span>Rain: {forcast.rain > 0 ? forcast.rain : 0} mm</span>{" "}
              Humidity: {forcast.humidity}%
            </div>
            <div>Wind: {forcast.wind_speed} m/s</div>
          </TempDetails>
          <TempTable>
            <Tr>
              <Th></Th>
              <Th>Morning</Th>
              <Th>Afternoon</Th>
              <Th>Evening</Th>
              <Th>Night</Th>
            </Tr>
            <Tr>
              <TdCell>Temperature</TdCell>
              <Td>
                <span>{Math.round(KelvinToCelsius(forcast.temp.morn))}°C</span>
              </Td>
              <Td>
                <span>{Math.round(KelvinToCelsius(forcast.temp.day))}°C</span>
              </Td>
              <Td>
                <span>{Math.round(KelvinToCelsius(forcast.temp.eve))}°C</span>
              </Td>
              <Td>
                <span>{Math.round(KelvinToCelsius(forcast.temp.night))}°C</span>
              </Td>
            </Tr>
            <Tr>
              <TdCell>Feels like</TdCell>
              <Td>
                <span>
                  {Math.round(KelvinToCelsius(forcast.feels_like.morn))}°C
                </span>
              </Td>
              <Td>
                <span>
                  {Math.round(KelvinToCelsius(forcast.feels_like.day))}°C
                </span>
              </Td>
              <Td>
                <span>
                  {Math.round(KelvinToCelsius(forcast.feels_like.eve))}°C
                </span>
              </Td>
              <Td>
                <span>
                  {Math.round(KelvinToCelsius(forcast.feels_like.night))}°C
                </span>
              </Td>
            </Tr>
          </TempTable>
        </DetailsContainer>
      )}
    </>
  );
};

export default DayForcastItem;
