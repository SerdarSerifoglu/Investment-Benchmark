import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const reportFilter = (state) => state.reportFilters.reportFilter;

export const getCumulativeReportData = createAsyncThunk(
  "reportFilters/getCumulativeReportData",
  async (data) => {
    console.log(data);
    const res = await httpClientService.post(`test`, data);
    return await res.json();
  }
);

const initialState = {
  reportFilter: {},
};

const reportFiltersSlice = createSlice({
  name: "reportFilters",
  initialState: initialState,
  reducers: {
    changeReportFilter: (state, action) => {
      const { fieldProperty, value } = action.payload;
      state.reportFilter[fieldProperty] = value;
    },
    clearReportFilter: (state) => {
      state.reportFilter = {};
    },
  },
});

export const { changeReportFilter } = reportFiltersSlice.actions;
export default reportFiltersSlice.reducer;
