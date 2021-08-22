import axios from "axios";

const API_KEY = "c17251a03c9ff19705ac6e89b74da3e3";

export const getCurrentWeather = (city) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather`;
  return axios.get(endpoint, { params: { q: city, appid: API_KEY } });
};

export const getGeoCoding = (city) => {
  const endpoint = `https://api.openweathermap.org/geo/1.0/direct`;
  return axios.get(endpoint, {
    params: { q: city, limit: 5, appid: API_KEY },
  });
};

export const getHourlyWeather = (lat, lon) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/onecall`;
  return axios.get(endpoint, {
    params: {
      lat: lat,
      lon: lon,
      exclude: "current,minutely,daily,alerts",
      appid: API_KEY,
    },
  });
};

export const getEightDayWeather = (lat, lon) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/onecall`;
  return axios.get(endpoint, {
    params: {
      lat: lat,
      lon: lon,
      exclude: "current,minutely,hourly,alerts",
      appid: API_KEY,
    },
  });
};
