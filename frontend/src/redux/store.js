import { configureStore } from "@reduxjs/toolkit";
import reportFiltersReducer from "./reportFilters/reportFiltersSlice";
import datesReducer from "./admin/datesSlice";
export const store = configureStore({
  reducer: {
    reportFilters: reportFiltersReducer,
    dates: datesReducer,
  },
});
