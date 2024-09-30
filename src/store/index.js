import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import weatherSlice from "./weatherSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    weather: weatherSlice,
  },
});
