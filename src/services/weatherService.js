import axios from "axios";

const API_KEY = "1f52f09f36683276e7c3f078ee678ac1";

export const getWeatherData = async (location) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  );

  return response?.data;
};

// Create a new function to fetch weather by coordinates
export const getWeatherDataByCoords = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return response?.data;
};
