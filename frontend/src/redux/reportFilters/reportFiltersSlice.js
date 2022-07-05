import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpClientService from "../../http-client/httpClientService";

export const RevenueReportFilter = (state) =>
  state.reportFilters.RevenueReportFilter;
export const CumulativeReportFilter = (state) =>
  state.reportFilters.CumulativeReportFilter;
export const RevenueReportData = (state) =>
  state.reportFilters.RevenueReportData;
export const CumulativeReportData = (state) =>
  state.reportFilters.CumulativeReportData;

export const getCumulativeReportData = createAsyncThunk(
  "reportFilters/getCumulativeReportData",
  async (filterData) => {
    const { data } = await httpClientService.post(
      `/report/cumulative-report`,
      filterData
    );
    return data;
  }
);
export const getRevenueReportData = createAsyncThunk(
  "reportFilters/getRevenueReportData",
  async (filterData) => {
    const { data } = await httpClientService.post(
      `/report/revenue-report`,
      filterData
    );
    return data;
  }
);

const initialState = {
  RevenueReportFilter: {},
  RevenueReportData: [],
  CumulativeReportFilter: {},
  CumulativeReportData: {},
};

const reportFiltersSlice = createSlice({
  name: "reportFilters",
  initialState: initialState,
  reducers: {
    changeReportFilter: (state, action) => {
      const { fieldProperty, value, stateName } = action.payload;
      state[stateName][fieldProperty] = value;
    },
  },
  extraReducers: {
    [getCumulativeReportData.fulfilled]: (state, action) => {
      state.CumulativeReportData = action.payload;
    },
    [getRevenueReportData.fulfilled]: (state, action) => {
      state.RevenueReportData = action.payload;
    },
  },
});

export const { changeReportFilter } = reportFiltersSlice.actions;
export default reportFiltersSlice.reducer;
