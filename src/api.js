import axios from "axios";

const API_KEY = "c17251a03c9ff19705ac6e89b74da3e3";

export const getCurrentWeather = (city) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather`;
  return axios.get(endpoint, { params: { q: city, appid: API_KEY } });
};
