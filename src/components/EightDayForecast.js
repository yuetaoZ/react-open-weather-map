import React, { useState, useEffect } from "react";
import { getGeoCoding, getEightDayWeather } from "../api";
import DayForcastItem from "./DayForcastItem";

const EightDayForecast = ({ city }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    if (!city) {
      return;
    }
    getGeoCoding(city)
      .then((resp) => resp.data[0])
      .then(({ lat, lon }) => {
        getEightDayWeather(lat, lon)
          .then((resp) => resp.data.daily)
          .then((dailyData) => {
            setDailyData(dailyData);
          })
          .catch((error) => console.log(`error`, error));
      })
      .catch((error) => {
        console.log(`error`, error);
      });
  }, [city]);

  return (
    dailyData && (
      <div>
        <h2>8-day forcast</h2>
        {dailyData.map((daily) => (
          <DayForcastItem key={daily.dt} forcast={daily}></DayForcastItem>
        ))}
      </div>
    )
  );
};

export default EightDayForecast;
