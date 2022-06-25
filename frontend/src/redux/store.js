import { configureStore } from "@reduxjs/toolkit";
import reportFiltersReducer from "./reportFilters/reportFiltersSlice";

export const store = configureStore({
  reducer: {
    reportFilters: reportFiltersReducer,
  },
});
