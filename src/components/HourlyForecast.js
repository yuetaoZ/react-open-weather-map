import React, { useState, useEffect } from "react";
import moment from "moment";
import { KelvinToCelsius } from "../utils";
import { getGeoCoding, getHourlyWeather } from "../api";
import LineChart from "./LineChart";

const HourlyForecast = ({ city }) => {
  const [hourlyData, setHourlyData] = useState([]);
  useEffect(() => {
    if (!city) {
      return;
    }
    getGeoCoding(city)
      .then((resp) => resp.data[0])
      .then(({ lat, lon }) =>
        getHourlyWeather(lat, lon)
          .then((resp) => resp.data.hourly)
          .then((hourlyDataInfo) => {
            return hourlyDataInfo.map((data) => {
              return {
                dt: moment.unix(data.dt).format("hh a"),
                temp: KelvinToCelsius(data.temp),
                humidity: data.humidity,
              };
            });
          })
          .then((hourlyData) => setHourlyData(hourlyData.slice(0, 24)))
          .catch((error) => console.log(`error`, error))
      )
      .catch((error) => {
        console.log(`error`, error);
      });
  }, [city]);

  return (
    hourlyData && (
      <>
        <h2>Hourly Forecast</h2>
        <LineChart hourlyData={hourlyData}></LineChart>
      </>
    )
  );
};

export default HourlyForecast;
