import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=1f52f09f36683276e7c3f078ee678ac1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();

    localStorage.setItem("lastWeatherData", JSON.stringify(data));
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: JSON.parse(localStorage.getItem("lastWeatherData")) || null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        const lastWeatherData = JSON.parse(
          localStorage.getItem("lastWeatherData")
        );
        state.data = lastWeatherData || null;
      });
  },
});

export default weatherSlice.reducer;
