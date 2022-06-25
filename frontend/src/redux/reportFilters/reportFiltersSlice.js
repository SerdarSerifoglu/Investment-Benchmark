import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {},
};

const reportFiltersSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    changeReportFilter: (state, action) => {
      const { fieldProperty, value } = action.payload;
      state.filter[fieldProperty] = value;
    },
    clearReportFilter: (state, action) => {
      state.filter = {};
    },
  },
});
export const { changeReportFilter } = reportFiltersSlice.actions;
export default reportFiltersSlice.reducer;
