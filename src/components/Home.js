import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weatherSlice"; // Assuming this action fetches weather data

export default function WeatherApp() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (location) {
      dispatch(fetchWeather(location));
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const handleSelect = () => {
    if (location) {
      dispatch(fetchWeather(location));
      setLocation("");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-white shadow-md">
        Weather App
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-blue-400 rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleSelect}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700 transition duration-200"
          disabled={!location} // Disable button if location is empty
        >
          Select Location
        </button>
      </div>

      {loading && <p className="text-white">Loading weather data...</p>}
      {error && (
        <div>
          <p className="text-red-500">Error: {error}</p>
          <p>Displaying last fetched weather data.</p>
        </div>
      )}
      {data ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-blue-600">{data.name}</h2>
          <p className="text-lg text-gray-800">
            Temperature: <span className="font-bold">{data.main.temp}°C</span>
          </p>
          <p className="text-lg text-gray-800">
            Humidity: <span className="font-bold">{data.main.humidity}%</span>
          </p>
          <p className="text-lg text-gray-800">
            Wind Speed: <span className="font-bold">{data.wind.speed} m/s</span>
          </p>
          <p className="text-lg text-gray-800 capitalize">
            Weather:{" "}
            <span className="font-bold">{data.weather[0].description}</span>
          </p>
        </div>
      ) : (
        !loading && <p className="text-white">No weather data available.</p>
      )}
    </div>
  );
}
