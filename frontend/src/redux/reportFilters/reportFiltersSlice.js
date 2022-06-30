import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const reportFilter = (state) => state.reportFilters.reportFilter;
export const RevenueReportFilter = (state) =>
  state.reportFilters.RevenueReportFilter;

export const getCumulativeReportData = createAsyncThunk(
  "reportFilters/getCumulativeReportData",
  async (data) => {
    const res = await httpClientService.post(`test`, data);
    return await res.json();
  }
);
export const getRevenueReportData = createAsyncThunk(
  "reportFilters/getRevenueReportData",
  async (data) => {
    const res = await httpClientService.post(`test-revenue`, data);
    return await res.json();
  }
);

const initialState = {
  reportFilter: {},
  RevenueReportFilter: {},
};

const reportFiltersSlice = createSlice({
  name: "reportFilters",
  initialState: initialState,
  reducers: {
    changeReportFilter: (state, action) => {
      const { fieldProperty, value, stateName } = action.payload;
      state[stateName][fieldProperty] = value;
    },
    clearReportFilter: (state) => {
      state.reportFilter = {};
    },
  },
});

export const { changeReportFilter, clearReportFilter } =
  reportFiltersSlice.actions;
export default reportFiltersSlice.reducer;
