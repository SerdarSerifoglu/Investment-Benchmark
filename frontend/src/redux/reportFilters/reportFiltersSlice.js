import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {},
};

const reportFiltersSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    changeReportFilter: (state, action) => {
      //   const id = action.payload;
      state.filter = "SERDAR";
    },
    clearReportFilter: (state, action) => {
      state.filter = {};
    },
  },
});
export const { changeReportFilter } = todosSlice.actions;
export default reportFiltersSlice.reducer;
